
  const development = {
    username: "gatana",
    password: null,
    database: process.env.POD_DB | 'POSDB',
    host: "127.0.0.1",
    dialect: "postgres"
  }
  const test = {
    username: "gatana",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "postgres"
  }
  const production = {
    username: "gatana",
    password: null,
    database: "database_development",
    host: "127.0.0.1",
    dialect: "postgres"
  }
module.exports = {
  development,
  test,
  production
}