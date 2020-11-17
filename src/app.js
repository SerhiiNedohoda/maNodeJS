require('dotenv').config();
const http = require('http');
const requesrHandler = require('./requesrHandler');

const server = http.createServer(requesrHandler);

server.listen(Number(process.env.PORT || 3000));
