const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
res.statusCode = 200;

var request = require('request');
request('https://version.common.freefiremobile.com/live/ver.php?version=1.60.3&device=android', function (error, response, body) {
     var fwf = body.split(",")
     var mmm =  fwf [8]
     var kon = fwf [1]
     var merdf = kon.split(":")
     res.end(mmm[18]+mmm[19]+mmm[20]+mmm[21]+mmm[22]+mmm[23]+" "+merdf [1])
});
});

server.listen(port, hostname);