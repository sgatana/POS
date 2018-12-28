const app = require('./start/server')

const port = process.env.PORT || 5000
// eslint-disable-next-line no-console
app.listen(port, () => console.log(`server running on port ${port}`))
