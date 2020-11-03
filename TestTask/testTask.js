const GOODS = [
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "green", "quantity": 5, "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 8, "priceForPair": "$6"},
    {"type": "hat", "color": "red", "quantity": 7, "price": "$5"},
    {"type": "hat", "color": "green", "quantity": 0, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"},
    {"type": "socks", "color": "red", "quantity": 10, "priceForPair": "$3"},
    {"type": "socks", "color": "white", "quantity": 3, "priceForPair": "$4"},
    {"type": "socks", "color": "green", "priceForPair": "$10"},
    {"type": "socks", "color": "blue", "quantity": 2, "priceForPair": "$6"},
    {"type": "hat", "color": "green", "quantity": 3, "price": "$5"},
    {"type": "hat", "color": "red", "quantity": 1, "price": "$6"},
    {"type": "socks", "color": "blue", "priceForPair": "$6"}
];
let totalPrice = 0;
let socksQuantity = 0;
let redHatQuantity = 0;
let red = 0, green = 0, blue = 0;

function getTotalPrice(inputGoods) {

    inputGoods.forEach((item) => {
        totalPrice += parseInt((item.price || item.priceForPair).replace(/\$/, '')) * (item.quantity || 0);
    })
    return totalPrice;
}

console.log("Result of total price calculation: " + getTotalPrice(GOODS) + "$");

for (let i = 0; i < GOODS.length; i++) {
    let item = GOODS[i];

    if (item.type === "socks" && !!item.quantity) { socksQuantity += item.quantity};

    if (item.type === "hat" && item.color === "red") { redHatQuantity += item.quantity}

    if (item.color === "red") { red += parseInt((item.price || item.priceForPair).replace(/\$/, '')) * (item.quantity || 0)};
    if (item.color === "green") { green += parseInt((item.price || item.priceForPair).replace(/\$/, '')) * (item.quantity || 0)};
    if (item.color === "blue") { blue += parseInt((item.price || item.priceForPair).replace(/\$/, '')) * (item.quantity || 0)};
}

console.log("Socks - " + socksQuantity + " pairs\nRed Hats - " + redHatQuantity + 
            "\nRed - " + red + "$, Green - " + green + "$, Blue - " + blue + "$");
