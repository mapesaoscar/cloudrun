const http = require('http')
const server = http.createServer((req, res) => {
    console.log('Working')
    res.end('Hello World')
})
const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
