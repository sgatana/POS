const userRepository = require('../lib/user')
const generaToken = require('../lib/adapters/user/generateToken')

class userController {
  static async createUser(req, res) {
    try {
      const params = req.body
      await userRepository.createUser(params)
      res.json({ message: 'user successfully registered' })
    } catch (error) {
      res.json({ error: error.message })
    }
  }

  static async userLogin(req, res) {
    try {
      const userData = req.body
      const user = await userRepository.userLogin(userData)
      req.user = user.userName
      const authToken = await generaToken(user)
      res.json({
        message: `you have successfully logged in`,
        authToken,
      })
    } catch (error) {
      res.json({ error: error.message })
    }
  }
}
module.exports = userController
