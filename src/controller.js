const { task1, task2, task3 } = require('./task/index');
const GOODS = require('../goods.json');

function home(response) {
    response.write('Home');
    response.end();
}

function ping(response) {
    response.setHeader('Content-Type', 'application/json')
    response.statusCode = 200;
    response.write(JSON.stringify({ "result": "pong"}));
    response.end();
}

function comment(data, response, queryParams) {
    response.write(JSON.stringify(data));
    response.end();
}

function firstTask(response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task1(GOODS, 'type', 'socks')));
    response.end();
}

function secondTask(response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task2));
    response.end();
}

function thirdTask(response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task3(task1(GOODS, 'type', 'socks'))));
    response.end();
}

module.exports = {
    home,
    ping,
    comment,
    firstTask,
    secondTask,
    thirdTask
}