var http = require("http");

http.createServer(function (request, response) {

   response.writeHead(200, {'Content-Type': 'application/json'});
   
   // Send the response body as "Hello World"
   response.end(JSON.stringify({"status": true, "message":'Hello World'}, null, 2));
}).listen(8080);

// Console will print the message
console.log('Server running at http://127.0.0.1:8080/');
