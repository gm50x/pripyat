const { App } = require('./src')

const PORT = process.env.PORT || 8000

const app = new App()
app.start(PORT)