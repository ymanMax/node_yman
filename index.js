const http = require('http');
const url = require('url');
const route = require('./route/index');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });
  if (req.url !== '/favicon.ico') {
    const { pathname } = url.parse(req.url);
    try {
      route[pathname] ? route[pathname](req, res) : route[`page404`]();
    } catch (error) {
      console.log(error);
    }
  }
});

server.listen(8090);
