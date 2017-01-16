// This is our http server
const http = require("http")

var server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/html"})
  response.write("Hello <strong>World<strong>")
  response.end()
}).listen(8888, () => {
   console.log('The server is listening')
})
module.exports = server
