const { authSecret } = require(`../.env`);
const jwt = require('jwt-simple');
const { compareSync } = require('bcrypt-nodejs');

module.exports = app => {

  const signin = async (req, res) => {

    if (!req.body.email || !req.body.password) {
      return res.status(400).send('Enter your email and password!')
    }

    const user = await app.db('users')
      .where({ email: req.body.email }).first()


    if (!user) return res.status(400).send('User not found!')

    const isMatch = compareSync(req.body.password.toString(), user.password)
    if (!isMatch) return res.status(401).send('Invalid email or password.')

    const now = Math.floor(Date.now() / 1000);

    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      admin: user.admin,
      iat: now,
      exp: now + (60 * 60 * 24 * 3)
    }

    try {
      return res.json({
        ...payload,
        token: jwt.encode(payload, authSecret)
      });
    } catch (err) {
      return res.status(500).json(err)
    }


  }

  const validateToken = async (req, res) => {
    const userDate = req.body || null

    try {
      if (userDate) {
        const token = jwt.decode(userDate.token, authSecret)

        if (new Date(token.exp * 1000) > new Date()) {
          return res.send(true)
        }
      }

    } catch (err) {
      // Token issue
    }

    res.send(false)
  }

  return { signin, validateToken };

}