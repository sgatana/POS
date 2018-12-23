const bcrypt = require('bcryptjs')

module.exports = {
  encryptPassword: async password => bcrypt.hash(password, 10),
  decryptPassword: async (password, loginPassword) =>
    bcrypt.compare(password, loginPassword),
}
