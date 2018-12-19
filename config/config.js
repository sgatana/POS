require('dotenv').config()

const development = {
  username: 'gatana',
  password: null,
  database: process.env.POS_DEVDB,
  host: '127.0.0.1',
  dialect: 'postgres',
  // logging: false,
}
const test = {
  username: 'gatana',
  password: null,
  database: process.env.POS_TESTDB,
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
}
const production = {
  username: 'gatana',
  password: null,
  database: process.env.POS_PRODB,
  host: '127.0.0.1',
  dialect: 'postgres',
  logging: false,
}
module.exports = {
  development,
  test,
  production,
}
