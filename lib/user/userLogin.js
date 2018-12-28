const hashPassword = require('../adapters/user/hashPassword')

module.exports = async userData => {
  let error
  const user = await db.users.findOne({
    where: {
      userName: userData.userName,
    },
  })
  if (!user) {
    error = {
      status: 401,
      message: 'invalid username or password',
    }
    throw error
  }
  const validateUser = await hashPassword.decryptPassword(
    userData.password,
    user.password,
  )
  if (!validateUser) {
    error = {
      status: 401,
      message: 'invalid username or password',
    }
    throw error
  }
  return user
}
