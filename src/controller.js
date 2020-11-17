const { task1, task2, task3 } = require('./task/index');

global.source = '';

function ping(response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify({ result: 'pong' }));
    response.end();
}

function firstTask(checkingGoods, response, queryParams) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task1(checkingGoods, queryParams.key, queryParams.value)));
    response.end();
}

function secondTask(response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task2));
    response.end();
}

function thirdTask(checkingGoods, response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify(task3(checkingGoods)));
    response.end();
}

function newGoods(data, response) {
    store = data.newGoods;
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 201;
    response.write(JSON.stringify({ status: 'New goods added!' }));
    response.end();
}

function addSource(data, response) {
    source = data.source;
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 201;
    response.write(JSON.stringify({ status: 'Source added!' }));
    response.end();
}

module.exports = {
    ping,
    firstTask,
    secondTask,
    thirdTask,
    newGoods,
    addSource,
};
