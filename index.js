const { App } = require('./src/app')

const { PORT } = process.env

const app = new App()
app.start(PORT)