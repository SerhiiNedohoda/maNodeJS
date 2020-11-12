const goods = require('../../goods.json');

const getMaxPrice = (arr) => {
    let itemWithMaxPrice;
    let maxPrice = 0;

    arr.forEach((item) => {
        const price = +(item.price || item.priceForPair).slice(1);
        const totalPrice = price * (item.quantity || 0);

        if (maxPrice < totalPrice) {
            maxPrice = totalPrice;
            itemWithMaxPrice = item;
        }
    });
    return itemWithMaxPrice;
};

module.exports = getMaxPrice(goods);
