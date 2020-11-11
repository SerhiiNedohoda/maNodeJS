const filterArray = (arr, key, value) => {
    const newArr = arr.filter((item) => {
        return item[key] === value;
    });

    return newArr;
};

module.exports.filterArray = filterArray;
