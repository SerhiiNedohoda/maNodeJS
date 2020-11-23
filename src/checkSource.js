/* eslint-disable no-extend-native */
/* eslint-disable consistent-return */
require('dotenv').config();
const GOODS = require('../goods.json');

module.exports = function sourceCheck(source, store) {
    if (source === 'store' && store.length >= 1) return store;
    return GOODS;
};

Array.prototype.myMap = function (callback) {
    const modifiedArr = [];

    for (let i = 0; i < this.length; i += 1) modifiedArr.push(callback(this[i]));

    return modifiedArr;
};

const resultArray = GOODS.myMap((param) => {
    if (!param.quantity) {
        param.quantity = 0;
    }

    if (!param.price) {
        param.price = param.priceForPair;
        delete param.priceForPair;
    }
    return param;
});

console.log(resultArray);

// Створити функцію з колбеком для генерування знижки, яка поверне свій результат в колбек через 50мс.
// Згенерувати знижку випадковим чином в діапазоні від 1 до 99%. Оскільки магазин не може собі дозволити
// великі знижки, то якщо знижка буде більше 20 (включно), функція поверне помилку,
// інакше поверне значення знижки. Створити обгортки над функцією з колбеком для полегшення роботи з
// асинхронними функціями. Обгортки мають бути реалізовані двома способами.

// function getDiscount(callback) {
//     let random = 0;
//     do {
//         random = callback(1, 100);
//     } while (random >= process.env.MAX_DISCOUNT);
//     return random;
// }

function discount(callback) {
    const min = Math.ceil(1);
    const max = Math.floor(100);
    const res = Math.floor(Math.random() * (max - min)) + min;
    if (res >= 20) {
        callback(new Error('Discount is too big'));
        return;
    }
    return callback(null, res);
}

const callback = (error, result) => {
    if (error !== null) {
        console.log(`Get error: ${error}`);
        return;
    }
    console.log(`Your discount: ${result}`);
    return result;
};

discount(callback);
