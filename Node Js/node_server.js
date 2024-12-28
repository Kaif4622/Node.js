//require module for nodejs
const http = require('http')
const port = 8081

//create server for nodejs
const server = http.createServer((req, res) => {
  if (req.url === '/api' && req.method === 'GET') {
    res.setHeader('Access-Control-Allow-Origin', '*'); // Allow requests from all origins (for development)
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify({ message: "Hello api" }));
  }
});

//listen the server
server.listen(port , ()=> {
    console.log(`server is running at port ${port}`)
})

