const createUser = require('./createUser')
const userLogin = require('./userLogin')

class userRepository {
  static createUser(params) {
    return createUser(params)
  }

  static userLogin(params) {
    return userLogin(params)
  }
}

module.exports = userRepository
