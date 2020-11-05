let arr = [
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
]

function calculatePriceList(inputArray) {
    let socksQuantity = 0;
    let redHatsQuantity = 0;
    let priceByColors = {};
    let priceAllGoods = 0;

    inputArray.forEach(e => {
        let price = +(e.price || e.priceForPair).slice(1);
        let quantity = e.quantity || 0;

        if (e.type === 'socks') socksQuantity += quantity;
        if (e.type === 'hat' && e.color === 'red') redHatsQuantity += quantity;

        priceAllGoods += price * quantity;

        priceByColors[e.color] ? priceByColors[e.color] += price * quantity : priceByColors[e.color] = price * quantity;
    });

    console.log(`Socks - ${socksQuantity}`);
    console.log(`Red Hats - ${redHatsQuantity}`);
    console.log(`Red - ${priceByColors.red}, Green - ${priceByColors.green}, Blue - ${priceByColors.blue}`);

    return priceAllGoods;
}

console.log(calculatePriceList(arr));