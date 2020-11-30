require('./customMap');
const { discount } = require('./generateDiscount');

function getPromiseDiscount() {
    return new Promise((resolve, reject) => {
        discount((err, res) => {
            if (err) {
                return getPromiseDiscount().then((value) => {
                    resolve(value);
                });
            }

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
                console.error(err.message);
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
    return newItems;
}

module.exports = startGoods;
