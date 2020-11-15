require('dotenv').config();
const http = require('http');

console.log(`${process.env.ORIGIN}:${process.env.PORT}`);

const requestHandler = (request, response) => {
    console.log('call Handler')
    if (request.url === '/ping') {
        console.log(`Request url is: ${request.url}`);
    }
    response.end('pong')
}

const server = http.createServer(requestHandler);

server.listen(process.env.PORT, (err) => {
    if (err) {
        return console.log(`Someting went wrong, ${err}`)
    }

    console.log(`Server is listening on port: ${process.env.PORT}`)
})

// const { task1: firstTask, task2: secondTask, task3 } = require('./task');
// const GOODS = require('../goods.json');

// function boot(arr, key, value) {
//     const resultFirstTask = firstTask(arr, key, value);

//     console.log(resultFirstTask);
//     console.log(task3(resultFirstTask));
//     console.log(secondTask);
// }

// boot(GOODS, 'type', 'socks');
