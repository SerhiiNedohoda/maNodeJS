// task2.js Створити функцію, яка прийматиме на вхід масив даних формату тестового завдання,
// і повертатиме запис товару з найбільшою вартістю, враховуючи кількість товарів в запису.
// Заекспортити виклик цієї функції через module.exports.
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
            itemWithMaxPrice = `${item.color} ${item.type}`;
        }
    });
    console.info(`Item "${itemWithMaxPrice}" has the max price: ${maxPrice}$`);
};

module.exports = getMaxPrice;
