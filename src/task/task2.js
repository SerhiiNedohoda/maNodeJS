// task2.js Створити функцію, яка прийматиме на вхід масив даних формату тестового завдання,
// і повертатиме запис товару з найбільшою вартістю, враховуючи кількість товарів в запису.
// Заекспортити виклик цієї функції через module.exports.
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
            itemWithMaxPrice = `Item "${item.color} ${item.type}" has the max price: ${maxPrice}`;
        }
    });
    return itemWithMaxPrice;
};

module.exports = getMaxPrice(goods.thinks);
