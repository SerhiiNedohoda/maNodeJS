// В файлі app.js, використовуючи деструктуризацію, підключити папку task та змінити назву для task1 та task2 на інші довільні назви.

// Створити функцію boot, яка приймає параметри необхідні для виконання функції task1, і виконує в своєму тілі послідовно такі дії:
//     - Отримання результатів виконання для переназваної функції task1 та виведення їх через console.log;
//     - Прокидування цих результатів виконання в функцію з модуля task3 та виведення їх через console.log;
//     - Виведення результату виконання функції task2 через console.log

// Викликати функцію boot з масивом даних та 'type' і 'socks'.

const { tasks } = require('./task');
const GOODS = require('../goods.json');

const firstTask = tasks.task1;
const secondTask = tasks.task2;

function boot(arr, key, value) {
    console.log(firstTask.filterArray(arr, key, value));
    console.log(secondTask);
}

boot(GOODS.thinks, 'type', 'hat');
