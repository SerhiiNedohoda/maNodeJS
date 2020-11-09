/* eslint-disable object-shorthand */
const task1 = require('./task1');
const task2 = require('./task2');
const task3 = require('./task3');

// console.log(task1.filterArray(GOODS, 'type', 'hat'));
// task2(GOODS);
// task3.modifyArray(GOODS);

const tasks = {
    task1: task1,
    task2: task2,
    task3: task3,
};

module.exports.tasks = tasks;
