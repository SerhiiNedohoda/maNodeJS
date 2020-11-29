/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
require('dotenv').config();
const util = require('util');

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

function discount(callback) {
    setTimeout(() => {
        const randomInt = getRandomInt(1, 100);
        // change MAX_DISCOUNT = 20
        if (randomInt >= process.env.MAX_DISCOUNT) {
            callback(new Error('Discount is too big'));
            return;
        }
        return callback(null, randomInt);
    }, 50);
}

// Invoke discount with callback
// const callback = (error, result) => {
//     if (error !== null) {
//         console.log(error.message);
//         return;
//     }
//     console.log(`Your discount: ${result}`);
//     return result;
// };

// discount(callback);

// +++++++++++++++++++++++Promise+++++++++++++++++

function discountPromise() {
    return new Promise((resolve, reject) => {
        discount((err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
}

// Invoke discount with promise
// discountPromise()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });

// // +++++++++++++++++++++++Promisify+++++++++++++++++

const discountPromisify = util.promisify(discount);

module.exports = {
    discount,
    discountPromise,
    discountPromisify,
};

// Invoke discount with promisify
// discountPromisify()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err.message);
//     });
