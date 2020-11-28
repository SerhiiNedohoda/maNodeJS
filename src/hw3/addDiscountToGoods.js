require('./customMap');
const { discountPromise, discountPromisify } = require('./generateDiscount');
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

function callDiscount() {
    discountPromise()
        .then((res) => {
            console.log(res);
            return res;
        })
        .catch((err) => {
            console.log(err.message);
            return new Error(err.message);
        });
}

function discountHandler(element, discounts, retry) {
    discountPromise()
        .then((res) => {
            // console.log(res);
            discounts.push(res);
            element.discount = res;
            if (discounts.length < retry) {
                discountHandler(element, discounts, retry);
            }
            console.log(element);
            return element;
        })
        .catch((err) => {
            // console.log(err.message);
            return discountHandler(element, discounts, retry);
        });
}

const modifyArray = (arr) => {
    let attempts = 0;
    const discountsArr = [];

    const result = arr.myMap((item) => {
        if (item.type === 'hat') attempts = 2;
        if (item.type === 'hat' && item.color === 'red') attempts = 3;

        discountHandler(item, discountsArr, attempts);

        if (!item.quantity) {
            item.quantity = 0;
        }

        if (!item.price) {
            item.price = item.priceForPair;
            delete item.priceForPair;
        }
        return item;
    });
    // console.log(result);
    return result;
};

modifyArray(GOODS);

// module.exports = modifyArray;
