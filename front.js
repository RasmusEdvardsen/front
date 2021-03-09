var http = require('http');

console.log("Starting server...")

var host = process.env.HOST
var port = process.env.PORT
var path = process.env.HTTPPATH
var server_string = `[HOST] ${host} on [PORT] ${port} and [PATH] ${path}`

http.createServer(function (_, res) {
    console.log(`Calling ${server_string}...`)

    http.get({ host, port, path }, function (from_server) {
        console.log("Got response: " + from_server.statusCode);

        from_server.on("data", function (chunk) {
            console.log("BODY: " + chunk);

            res.write(`Got response from ${server_string}:\n` + chunk);
            res.end();
        });
    }).on('error', function (e) {
        res.write(`Got error from ${server_string}:\n` + e.message);
        res.end();
    });
}).listen(8080);

console.log("Started server!")
