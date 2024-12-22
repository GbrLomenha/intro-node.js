const htpp = require('http')

const server = http.createServer((req, res) => {
    console.log(req)
})

export const app = server.listen(3000, () => {
    console.log('Server is running on port 3000')
})