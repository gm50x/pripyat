module.exports = {
    GetSamples: require('./src/handlers/get-samples'),
    GetSampleById: require('./src/handlers/get-sample-by-id'),
    AddSample: require('./src/handlers/add-sample'),
    SamplesService: require('./src/services/samples-service'),
    SamplesRouter: require('./src/router/samples-router')
}