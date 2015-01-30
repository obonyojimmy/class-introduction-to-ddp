// require some modules/libraries we'll be using.
var http = require('http');
var cli = require('cli-color');
var green = cli.green;

var server = http.createServer(function (req, res) {
  // log the request method and url to the console
  console.log(green(req.method) + ': ' + req.url);

  // HTTP status OK with Content-Type header to tell client
  // we're sending back text/html in the body.
  res.writeHead(200, {'Content-Type': 'text/html'});

  // Now actually write the html body of the response.
  res.end('<h1>The item title is: ' + req.url.slice(1) + '!</h1>\n');
});

// tell the server to listen on port 3000.
server.listen(3000);

// a nice message for our users.
console.log('Server running at http://localhost:3000');
