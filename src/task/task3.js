const modifyArray = (arr) => {
    const result = arr.map((item) => {
        if (!('quantity' in item)) {
            item.quantity = 0;
        }

        if (!('price' in item) && 'priceForPair' in item) {
            item.price = item.priceForPair;
            delete item.priceForPair;
        }
        return item;
    });
    return result;
};

module.exports.modifyArray = modifyArray;
