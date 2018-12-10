require('dotenv').config()

const development = {
  username: 'gatana',
  password: null,
  database: process.env.POS_DEVDB,
  host: '127.0.0.1',
  dialect: 'postgres',
}
const test = {
  username: 'gatana',
  password: null,
  database: process.env.POS_TESTDB,
  host: '127.0.0.1',
  dialect: 'postgres',
}
const production = {
  username: 'gatana',
  password: null,
  database: process.env.POS_PRODB,
  host: '127.0.0.1',
  dialect: 'postgres',
}
module.exports = {
  development,
  test,
  production,
}
