const jwt = require('jsonwebtoken')

module.exports = async user =>
  jwt.sign(
    {
      id: user.id,
      name: user.userName,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: '24h',
    },
  )
