const { task1, task2, task3 } = require('./task/index');
// const GOODS = require('../goods.json');

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

function firstTask(source, response, queryParams) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task1(source, queryParams.key, queryParams.vallue)));
    response.end();
}

function secondTask(response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task2));
    response.end();
}

function thirdTask(source, response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task3(source)));
    response.end();
}

function newGoods(data, response) {
    store = data.newGoods;
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 201;
    response.write(JSON.stringify({ "status": "New goods added!"}));
    response.end();
}

module.exports = {
    home,
    ping,
    comment,
    firstTask,
    secondTask,
    thirdTask,
    newGoods
}