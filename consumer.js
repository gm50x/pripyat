const axios = require('axios')

function fetch() {
    return axios.get(`http://pripyat-api:${process.env.PORT}/g`)
}

function main() {
    let counter = 0;
    setInterval(async () => {
        try {
            const { data } = await fetch()
            console.info(counter++, data)
        } catch (err) {
            console.error(err.message)
        }
    }, 1000)
}

main()