module.exports = class MockHttpResponse {
    status(st) {
        this.statusCode = st
        return this
    }

    json(obj) {
        this.obj = obj
        return obj
    }
}