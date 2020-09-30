const input = [
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
let socksQuantity = 0;
let redHatQuantity = 0;
let red = 0, green = 0, blue = 0;

for (var i = 0; i < input.length; i++) {
    let obj = input[i];

    if (obj.type == "socks" && obj.quantity != undefined) { socksQuantity = socksQuantity + obj.quantity};

    if (obj.type == "hat" && obj.color == "red") { redHatQuantity = redHatQuantity + obj.quantity}

    if (obj.color = "red") { red = red + (obj.price != undefined ? parseInt(obj.price.replace(/\$/, '')) 
                                                               : parseInt(obj.priceForPair.replace(/\$/, '')))};
    if (obj.color = "green") { green = green + (obj.price != undefined ? parseInt(obj.price.replace(/\$/, '')) 
                                                                      : parseInt(obj.priceForPair.replace(/\$/, '')))};
    if (obj.color = "blue") { blue = blue + (obj.price != undefined ? parseInt(obj.price.replace(/\$/, '')) 
                                                                    : parseInt(obj.priceForPair.replace(/\$/, '')))};
}

console.log("Socks - " + socksQuantity + "\nRed Hats - " + redHatQuantity + 
            "\nRed - " + red + "$, Green - " + green + "$, Blue - " + blue + "$");



