const { tasks } = require('./task');
const GOODS = require('../goods.json');

const firstTask = tasks.task1;
const secondTask = tasks.task2;

function boot(arr, key, value) {
    const resultFirstTask = firstTask.filterArray(arr, key, value);

    console.log(resultFirstTask);
    console.log(tasks.task3.modifyArray(resultFirstTask));
    console.log(secondTask);
}

boot(GOODS, 'type', 'socks');
