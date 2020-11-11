const goods = require('../../goods.json');

const getMaxPrice = (arr) => {
    let maxPrice = 0;
    let totalPrice = 0;
    let price = 0;
    let itemWithMaxPrice = '';

    arr.forEach((item) => {
        price = +(item.price || item.priceForPair).slice(1);
        totalPrice = price * (item.quantity || 0);

        if (maxPrice < totalPrice) {
            maxPrice = totalPrice;
            itemWithMaxPrice = `${item.quantity} items of "${item.color} ${item.type}" has the max price: ${maxPrice}`;
        }
    });
    return itemWithMaxPrice;
};

module.exports = getMaxPrice(goods.thinks);
