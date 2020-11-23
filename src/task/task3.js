require('../hw3/customMap');

const modifyArray = (arr) => {
    const result = arr.myMap((item) => {
        if (!item.quantity) {
            item.quantity = 0;
        }

        if (!item.price) {
            item.price = item.priceForPair;
            delete item.priceForPair;
        }
        return item;
    });
    return result;
};

module.exports = modifyArray;
