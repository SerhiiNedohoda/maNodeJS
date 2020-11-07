const task1 = require('./task1');
const task2 = require('./task2');

const GOODS = [
    { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
    { type: 'socks', color: 'green', quantity: 5, priceForPair: '$10' },
    { type: 'socks', color: 'blue', quantity: 8, priceForPair: '$6' },
    { type: 'hat', color: 'red', quantity: 7, price: '$5' },
    { type: 'hat', color: 'green', quantity: 0, price: '$6' },
    { type: 'socks', color: 'blue', priceForPair: '$6' },
    { type: 'socks', color: 'red', quantity: 10, priceForPair: '$3' },
    { type: 'socks', color: 'white', quantity: 3, priceForPair: '$4' },
    { type: 'socks', color: 'green', priceForPair: '$10' },
    { type: 'socks', color: 'blue', quantity: 2, priceForPair: '$6' },
    { type: 'hat', color: 'green', quantity: 3, price: '$5' },
    { type: 'hat', color: 'red', quantity: 1, price: '$6' },
    { type: 'socks', color: 'blue', priceForPair: '$6' },
];
// let price = 0;
// let totalPrice = 0;
// let socksQuantity = 0;
// let redHatQuantity = 0;
// let red = 0;
// let green = 0;
// let blue = 0;

console.log(task1.filterArray(GOODS, 'type', 'hat'));
task2(GOODS);

// function getTotalPrice(inputGoods) {
//     inputGoods.forEach((item) => {
//         price = +(item.price || item.priceForPair).slice(1);

//         totalPrice += price * (item.quantity || 0);

//         if (item.type === 'socks' && !!item.quantity) {
//             socksQuantity += item.quantity;
//         }

//         if (item.type === 'hat' && item.color === 'red') {
//             redHatQuantity += item.quantity;
//         }

//         if (item.color === 'red') {
//             red += price * (item.quantity || 0);
//         }
//         if (item.color === 'green') {
//             green += price * (item.quantity || 0);
//         }
//         if (item.color === 'blue') {
//             blue += price * (item.quantity || 0);
//         }
//     });

//     // console.log(
//     //     `Socks - ${socksQuantity} pairs\nRed Hats - ${redHatQuantity}\nRed - ${red}$, Green - ${green}$, Blue - ${blue}$`,
//     // );

//     return totalPrice;
// }

// console.log(`Result of total price calculation: ${getTotalPrice(GOODS)}$`);
