module.exports = app => {
  const { existsOrError, notExistsOrError } = app.api.validation;

  const save = (req, res) => {
    const category = { ...req.body }

    if (req.params.id) category.id = req.params.id

    try {
      existsOrError(category.name, 'Name not inform')
    } catch (msg) {
      return res.status(400).json(msg)
    }

    if (category.id) {
      app.db('categories')
        .update(category)
        .where({ id: category.id })
        .then(_ => res.status(204).json())
        .catch(err => res.status(500).json(err))
    } else {
      app.db('categories')
        .insert(category)
        .then(category => res.status(201).json(category))
        .catch(err => res.status(500).json(err))
    }

  }

  const remove = async (req, res) => {

    const { id } = req.params;

    try {
      existsOrError(req.params.id, 'Category Code not informed')

      const subCategory = await app.db('categories')
        .where({ parentId: id })
      notExistsOrError(subCategory, 'Category have subCategories')

      const articles = await app.db('articles')
        .where({ categoryId: id })
      notExistsOrError(articles, 'Category have articles')

      const rowsDeleted = await app.db('categories')
        .where({ id }).del()
      existsOrError(rowsDeleted, 'Category not found')

      res.status(204).json(rowsDeleted)
    } catch (msg) {
      res.status(400).json(msg)
    }
  }

  const withPath = categories => {

    const getParent = (categories, parentId) => {
      const parent = categories.filter(parent => parent.id === parentId)
      return parent.length ? parent[0] : null
    }

    const categoriesWithPath = categories.map(category => {
      let path = category.name
      let parent = getParent(categories, category.parentId)

      while (parent) {
        path = `${parent.name} > ${path}`
        parent = getParent(categories, parent.parentId)
      }

      return { ...category, path }
    })

    categoriesWithPath.sort((a, b) => {
      if (a.path < b.path) return -1
      if (a.path > b.path) return 1
      return 0
    })

    return categoriesWithPath;

  }

  const get = (req, res) => {
    app.db('categories')
      .then(categories => res.json(withPath(categories)))
      .catch(err => res.status(500).json(err))
  }

  const getById = (req, res) => {
    app.db('categories')
      .where({ id: req.params.id }).first()
      .then(category => res.json(category))
      .catch(err => res.status(500).json(err))
  }

  const toTree = (categories, tree) => {
    if (!tree) tree = categories.filter(c => !c.parentId)

    tree = tree.map(parentNode => {
      const isChild = node => node.parentId === parentNode.id

      parentNode.children = toTree(categories, categories.filter(isChild))

      return parentNode
    })

    return tree
  }

  const getTree = (req, res) => {
    app.db('categories')
      .then(categories => res.json(toTree(withPath(categories))))
      .catch(err => res.status(500).json(err))
  }



  return { save, remove, get, getById, getTree };
}