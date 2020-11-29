require('./customMap');
const { discountPromise } = require('./generateDiscount');
const GOODS = require('../../goods.json');

// function createDiscountForHat(element) {
//     discountPromise()
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((err) => {
//             console.log(err.message);
//             discountPromise();
//         });
// }

// function createDiscount(element) {
//     if (element.type === 'hat') {
//         discountPromise()
//             .then((res) => {
//                 console.log(res);
//                 return discountPromise();
//             })
//             .then((res) => {
//                 console.log(res);
//             })
//             .catch((err) => {
//                 console.log(err.message);
//             });
//     }
// }

function discountHandler(element, discounts, retry, callback) {
    discountPromise()
        .then((res) => {
            // console.log(res);
            discounts.push(res);
            element.discount = res;
            if (discounts.length < retry) {
                discountHandler(element, discounts, retry, callback);
            }
            // console.log(discounts);
            return callback(element);
        })
        .catch((err) => {
            // console.log(err.message);
            return discountHandler(element, discounts, retry, callback);
        });
}

const modifyArray = (arr) => {
    let attempts = 0;
    const discountsArr = [];

    const result = arr.myMap((item) => {
        if (item.type === 'hat') attempts = 2;
        if (item.type === 'hat' && item.color === 'red') attempts = 3;

        return discountHandler(item, discountsArr, attempts, (itemWithDiscount) => {
            // eslint-disable-next-line no-param-reassign
            item = itemWithDiscount;
            if (!item.quantity) {
                item.quantity = 0;
            }

            if (!item.price) {
                item.price = item.priceForPair;
                delete item.priceForPair;
            }
            // console.log(item);
            return item;
        });

        // console.log(discountsArr);
    });
    // console.log(result);
    return result;
};
async function getArr() {
    const newArr = await Promise.all(modifyArray(GOODS));
    console.log(newArr);
}
// module.exports = modifyArray;
console.log(getArr());
