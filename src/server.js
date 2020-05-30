const http = require('http');
const app = require('./app/app');

const server = http.Server(app);

server.listen(3000);