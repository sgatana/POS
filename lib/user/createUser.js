const pushid = require('pushid')
const hashPassword = require('../adapters/user/hashPassword')

module.exports = async params => {
  const user = await db.users.count({ where: { userName: params.userName } })
  if (user > 0) throw new Error('user already registered')
  params.password = await hashPassword.encryptPassword(params.password)
  params.id = pushid()
  await db.users.create(params)
}
