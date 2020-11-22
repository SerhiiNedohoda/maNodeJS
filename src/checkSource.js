const GOODS = require('../goods.json');
const modifyArray = require('./task/task3');

module.exports = function sourceCheck(source, store) {
    if (source === 'store' && store.length >= 1) return store;
    return GOODS;
};

function customMap(array, callback) {
    const modifiedArr = [];
    for (let i = 0; i < array.length; i += 1) {
        const element = array[i];
        modifiedArr.push(callback(element));
    }
    return modifiedArr;
}

const resultArray = customMap(GOODS, (param) => {
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
