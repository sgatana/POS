const hashPassword = require('../adapters/user/hashPassword')

module.exports = async userData => {
  const user = await db.users.findOne({
    where: {
      userName: userData.userName,
    },
  })
  if (!user) throw new Error('user does not exists')
  const validateUser = await hashPassword.decryptPassword(
    userData.password,
    user.password,
  )
  if (!validateUser) throw new Error('password do not match')
  return user
}
