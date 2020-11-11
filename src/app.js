const { tasks } = require('./task');
const firstTask = require('./task').tasks.task1;
const secondTask = require('./task').tasks.task2;
const GOODS = require('../goods.json');

function boot(arr, key, value) {
    const resultFirstTask = firstTask(arr, key, value);

    console.log(resultFirstTask);
    console.log(tasks.task3(resultFirstTask));
    console.log(secondTask);
}

boot(GOODS, 'type', 'socks');
