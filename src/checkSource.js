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

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function discountCallback(callback) {
    setTimeout(() => {
        const randomInt = getRandomInt(0, 100);
        // change MAX_DISCOUNT = 20
        if (randomInt >= process.env.MAX_DISCOUNT) {
            callback(new Error('Discount is too big'));
            return;
        }
        return callback(null, randomInt);
    }, 50);
}

const callback = (error, result) => {
    if (error !== null) {
        console.log(error.message);
        return;
    }
    console.log(`Your discount: ${result}`);
    return result;
};

discountCallback(callback);

// +++++++++++++++++++++++Promise+++++++++++++++++

function discountPromise() {
    return new Promise((resolve, reject) => {
        discountCallback((err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
}

discountPromise()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err.message);
    });
