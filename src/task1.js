// task1.js Cтворити функцію, яка прийматиме на вхід масив даних формату тестового завдання,
// параметр-рядок, за яким відфільтрувати товари, та
// параметр значення, на яке перевірятиметься попередній параметр, і повертатиме відфільтрований масив.
// Заекспортити цю функцію через module.exports.

const filterArray = (arr, key, value) => {
    const newArr = arr.filter((item) => {
        return item[key] === value;
    });

    return newArr;
};

module.exports.filterArray = filterArray;
