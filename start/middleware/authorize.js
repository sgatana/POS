const jwt = require('jsonwebtoken')

const skipPaths = ['/api/user/register', '/api/user/login']
module.exports = (req, res, next) => { // eslint-disable-line
  if (skipPaths.includes(req.path)) return next()
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    req.user = decoded

    return next()
  } catch (error) {
    res
      .status(401)
      .json({ error: 'you are not authorized, please sign in and try again' })
  }
}
