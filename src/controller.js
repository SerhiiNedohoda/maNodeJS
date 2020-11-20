const { task1, task2, task3 } = require('./task/index');
const sourceCheck = require('./checkSource');

let source = '';
let store = [];

function ping(response) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(JSON.stringify({ result: 'pong' }));
    response.end();
}

function firstTask(response, queryParams) {
    response.setHeader('Content-Type', 'application/json');
    response.statusCode = 200;
    response.write(
        JSON.stringify(task1(sourceCheck(source, store), queryParams.key, queryParams.value)),
    );
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
    response.write(JSON.stringify(task3(sourceCheck(source, store))));
    response.end();
}

function newGoods(data, response) {
    if (data.newGoods) {
        store = data.newGoods;
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 201;
        response.write(JSON.stringify({ status: 'New goods added!' }));
        response.end();
    } else {
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 400;
        response.write(
            JSON.stringify({ status: 'No key "newGoods" in request body, or body is empty!' }),
        );
        response.end();
    }
}

function addSource(data, response) {
    if (data.source) {
        source = data.source;
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 201;
        response.write(JSON.stringify({ status: 'Source added!' }));
        response.end();
    } else {
        response.setHeader('Content-Type', 'application/json');
        response.statusCode = 400;
        response.write(
            JSON.stringify({ status: 'No key "source" in request body, or body is empty!' }),
        );
        response.end();
    }
}

module.exports = {
    ping,
    firstTask,
    secondTask,
    thirdTask,
    newGoods,
    addSource,
};
