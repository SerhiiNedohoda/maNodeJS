/* eslint-disable func-names */
/* eslint-disable no-extend-native */
// const GOODS = require('../../goods.json');

Array.prototype.myMap = function (callback) {
    const modifiedArr = [];

    for (let i = 0; i < this.length; i += 1) modifiedArr.push(callback(this[i]));

    return modifiedArr;
};

// Example of using
// const resultArray = GOODS.myMap((param) => {
//     if (!param.quantity) {
//         param.quantity = 0;
//     }

//     if (!param.price) {
//         param.price = param.priceForPair;
//         delete param.priceForPair;
//     }
//     return param;
// });

// console.log(resultArray);
