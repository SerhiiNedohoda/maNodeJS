require('./customMap');
const { discountPromise, discountPromisify } = require('./generateDiscount');
const GOODS = require('../../goods.json');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function discount(callback) {
    setTimeout(() => {
        const randomInt = getRandomInt(1, 100);
        // change MAX_DISCOUNT = 20
        if (randomInt >= process.env.MAX_DISCOUNT) {
            return callback(new Error('Discount is too big'));
        }
        return callback(null, randomInt);
    }, 50);
}

function getPromiseDiscount(retry, discounts) {
    return new Promise((resolve, reject) => {
        let retryRemains = retry;
        discount((err, res) => {
            if (err) {
                // console.log(err.message);
                return getPromiseDiscount(retryRemains, discounts).then((value) => {
                    resolve(value);
                });
            }
            console.log(`before retryRemains ${discounts}`);
            if (retryRemains > 1) {
                retryRemains -= 1;
                console.log(`retry ${retryRemains}`);
                return getPromiseDiscount(retryRemains, discounts).then((value) => {
                    console.log(`before push ${discounts}`);
                    console.log(`after push ${discounts}`);
                    resolve(value);
                });
            }
            discounts.push(res);
            console.log(discounts);

            return resolve(res);
        });
    });
}

function addDiscount(items) {
    let attempts = 1;
    const modifiedItems = items.myMap((item) => {
        const multipleDiscount = [];

        if (item.type === 'hat') attempts = 2;
        if (item.type === 'hat' && item.color === 'red') attempts = 3;

        return getPromiseDiscount(attempts, multipleDiscount)
            .then((value) => {
                const newItem = Object.assign(item, { discount: value });
                return newItem;
            })
            .catch((err) => {
                console.log(err.message);
            });
    });
    return modifiedItems;
}

function customizeDiscount(disc) {
    const reducer = (acum, current) => acum * (1 - current / 100);
    const itemDiscount = disc.reduce(reducer, 1);
    const realDiscount = Math.trunc((1 - itemDiscount) * 100);
    return `${realDiscount}%`;
}

async function startGoods(arr) {
    const newItems = await Promise.all(addDiscount(arr));
    const newItemsHat = await Promise.all(addDiscount(arr));
    const newItemsRedHat = await Promise.all(addDiscount(arr));

    for (let index = 0; index < newItems.length; index += 1) {
        if (newItems[index].type === 'hat' && newItems[index].color !== 'red') {
            const interimArr = [];
            interimArr.push(Number(newItems[index].discount));
            interimArr.push(Number(newItemsHat[index].discount));
            newItems[index].discount = customizeDiscount(interimArr);
        } else if (newItems[index].type === 'hat' && newItems[index].color === 'red') {
            const interimArr = [];
            interimArr.push(Number(newItems[index].discount));
            interimArr.push(Number(newItemsHat[index].discount));
            interimArr.push(Number(newItemsRedHat[index].discount));
            newItems[index].discount = customizeDiscount(interimArr);
        } else newItems[index].discount = `${newItems[index].discount}%`;
    }
    console.log(newItems);
}

startGoods(GOODS);
