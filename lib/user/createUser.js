module.exports = async (db, params) => {
  await db.user.create(params)
}
