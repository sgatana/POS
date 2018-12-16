const updateProduct = require('./updateProduct')

module.exports = async id => {
  const payload = {}
  payload.deleted = true
  await updateProduct(id, payload)
}
