const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const { ErrorHandler } = require('../../core/middlewares')

const { TimeRouter } = require('../../components/current-time')
const { SamplesRouter } = require('../../components/samples')
const { ErrorSamplesRouter } = require('../../components/error-samples')
const { NotFoundRouter } = require('../../components/not-found')

const AppRouter = require('./app-router')

module.exports = class App {
    constructor() {
        this.app = express()
        this.router = new AppRouter()
        this._init()
    }

    _init() {
        this.app.use(bodyParser.urlencoded({ extended: false }))
        this.app.use(bodyParser.json())
        this.app.use(morgan('dev'))

        this.router.addModule(new TimeRouter('time'))
        this.router.addModule(new SamplesRouter('samples'))
        this.router.addModule(new ErrorSamplesRouter('error'))

        this.router.addModule(new NotFoundRouter('*'))
        
        this.app.use(this.router.getRoutes())
        this.app.use(new ErrorHandler().middleware)
    }

    start(port = 8000, env = 'DEVELOPMENT') {
        this.app.listen(port, () => console.log(`Server is runnin on ${env} mode and listening on ${port}.`))
    }
}





