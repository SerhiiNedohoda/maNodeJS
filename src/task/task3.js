// task3.js Створити функцію, яка прийматиме на вхід масив даних формату тестового завдання,
// і повертатиме модифікований масив, що приводить кожний запис товару до єдиного формату,
// тобто кожен з елементів масиву має мати однакову кількість і назви всіх полів.
// Заекспортити цю функцію через module.exports.
const modifyArray = (arr) => {
    let allKeys = [];
    let modifiedArr = [];

    for (const item of arr) {
        Object.keys(item).forEach((element) => {
            const newArr = element.filter((item) => {
                return item[key] === value;
            });
        });
        console.log(Object.keys(item));
    }

    return modifiedArr;
};

module.exports.modifyArray = modifyArray;
