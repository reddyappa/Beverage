var http = require('http');
var fs = require('fs');

function onRequest(request,response){
  if(request.method == 'GET' && request.url == '/') {
          response.writeHead(200,{"Content-Type":"text/html"});
          fs.createReadStream("./index.html").pipe(response);
  }
  else if(request.method == 'GET' && request.url == '/json/beverage_menu.json') {
          response.writeHead(200,{"Content-Type":"text/json"});
          fs.createReadStream("/json/beverage_menu.json").pipe(response);
  }
}

http.createServer(onRequest).listen(2341);
console.log("Server is running ....");