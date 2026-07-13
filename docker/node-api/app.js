const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome!');
    return;
  }

  if (req.url === '/how-are-you') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('I am fine, how about you?');
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Not found');
});

server.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
