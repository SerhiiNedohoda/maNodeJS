const GOODS = require('../goods.json');

module.exports = function sourceCheck(source, store) {
    if (source === 'store' && store.length >= 1) return store;
    return GOODS;
};

// eslint-disable-next-line no-extend-native
Array.prototype.myMap = (callback) => {
    const modifiedArr2 = [];

    for (let i = 0; i < this.length; i += 1) modifiedArr2.push(callback(this[i]));

    return modifiedArr2;
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
