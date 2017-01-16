// This is our http server
const http = require("express")

var server = http('/')
server.get('/', (request, response) => {
  response.setHeader('Content-Type', 'text/html')
  response.end('Hello <strong>World<strong>')
}).listen(8888, () => {
   console.log('The server is listening')
})

module.exports = server
