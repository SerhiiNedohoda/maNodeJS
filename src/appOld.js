const { task1: firstTask, task2: secondTask, task3 } = require('./task');
const GOODS = require('../goods.json');

function boot(arr, key, value) {
    const resultFirstTask = firstTask(arr, key, value);

    console.log(resultFirstTask);
    console.log(task3(resultFirstTask));
    console.log(secondTask);
}

boot(GOODS, 'type', 'socks');
