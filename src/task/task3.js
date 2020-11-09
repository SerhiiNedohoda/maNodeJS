// task3.js Створити функцію, яка прийматиме на вхід масив даних формату тестового завдання,
// і повертатиме модифікований масив, що приводить кожний запис товару до єдиного формату,
// тобто кожен з елементів масиву має мати однакову кількість і назви всіх полів.
// Заекспортити цю функцію через module.exports.
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
