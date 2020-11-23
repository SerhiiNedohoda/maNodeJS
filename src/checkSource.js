const GOODS = require('../goods.json');

module.exports = function sourceCheck(source, store) {
    if (source === 'store' && store.length >= 1) return store;
    return GOODS;
};
