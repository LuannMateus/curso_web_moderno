const { categoryWithChildren } = require('./queries');

module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validation;

  const save = (req, res) => {
    const article = { ...req.body }

    if (req.params.id) article.id = req.params.id

    try {
      existsOrError(article.name, 'Name not inform')
      existsOrError(article.description, 'Description not inform')
      existsOrError(article.categoryId, 'Category not inform')
      existsOrError(article.userId, 'Author not inform')
      existsOrError(article.content, 'Content not inform')
    } catch (msg) {
      res.status(400).json(msg)
    }

    if (article.id) {
      app.db('articles')
        .update(article)
        .where({ id: article.id })
        .then(_ => res.status(204).json())
        .catch(err => res.status(500).json(err))
    } else {
      app.db('articles')
        .insert(article)
        .then(_ => res.status(204).send())
        .catch(err => res.status(500).json(err))
    }

  }

  const remove = async (req, res) => {
    try {
      const rowsDeleted = await app.db('articles')
        .where({ id: req.params.id }).del()

      try {
        existsOrError(rowsDeleted, 'Article not found')

      } catch (msg) {
        return res.status(400).json(msg)
      }
          
      res.status(204).json()
    } catch (msg) {
      res.status(500).json(msg)
    }
  }

  const limit = 3 // Used for pagination

  const get = async (req, res) => {
    const page = req.query.page || 1

    const result = await app.db('articles').count('id').first()
    const count = parseInt(result.count)

    app.db('articles')
      .select('id', 'name', 'description')
      .limit(limit).offset(page * limit - limit)
      .then(articles => res.json({ data: articles, count, limit }))
      .catch(err => res.status(500).json(err))
  }

  const getById = (req, res) => {

    app.db('articles')
      .where({ id: req.params.id }).first()
      .then(article => {
        article.content = article.content.toString()
        return res.json(article)
      })
      .catch(err => res.status(500).json(err))
  }

  const getByCategory = async (req, res) => {
    const categoryId = req.params.id
    const page = req.query.page || 1
    const categories = await app.db.raw(categoryWithChildren, categoryId)
    const ids = categories.rows.map(c => c.id)

    app.db({a: 'articles', u: 'users'})
      .select('a.id', 'a.name', 'a.description', 'a.imageUrl',  { author: 'u.name'})
      .limit(limit).offset(page * limit - limit)
      .whereRaw('?? = ??', ['u.id', 'a.userId'])
      .whereIn('categoryId', ids)
      .orderBy('a.id', 'desc')
      .then(articles => res.json(articles))
      .catch(err => res.status(500).json(err))
  }


  return { save, remove, get, getById, getByCategory }

}