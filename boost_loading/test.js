const http = require("http");
const fs = require('fs');
const port = 4001;

var server = http.createServer(function(req, res) {
    switch (req.url) {
        case '/':
            var html = fs.readFileSync('index.html', 'utf8');
            res.setHeader("Content-Type", "text/html");
            res.end(html);
            break;
        case '/will-not-stop-loading.js':
            break;
    }
});

server.listen(port, e =>
console.log(`listening to port: ${port}`));