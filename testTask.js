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
        totalPrice += parseInt((item.price || item.priceForPair).replace(/\$/, '')) * (item.quantity || 1);
    })
    return totalPrice;
}

console.log("Result of total price calculation: " + getTotalPrice(GOODS) + "$");

function getPrice(inputObj) {
    let price = 0;
    price = inputObj.price != undefined ? parseInt(inputObj.price.replace(/\$/, '')) : parseInt(inputObj.priceForPair.replace(/\$/, ''));

    return price;
}

function calculateSocks(inputData) {

    inputData.forEach((obj) => {
        if (obj.type == "socks" && obj.quantity != undefined) {
            socksQuantity = socksQuantity + obj.quantity
            totalAmount = totalAmount + getPrice(obj) * obj.quantity;
        };
    });
    
    console.log("Socks - " + socksQuantity + ", Total price: " + totalAmount + "$");
}

function calculateRedHat(inputData) {
    
    inputData.forEach((obj) => {
        if (obj.type == "hat" && obj.color == "red") { 
            redHatQuantity = redHatQuantity + obj.quantity;
            totalAmount = totalAmount + getPrice(obj) * obj.quantity;
        };
    });
    
    console.log("Red Hats - " + redHatQuantity + ", Total price: " + totalAmount + "$");
}

function calculateRGB(inputData) {
    
    inputData.forEach(function(obj) {
        if (obj.color = "red" && obj.quantity != undefined) { red = red + getPrice(obj) * obj.quantity};
        if (obj.color = "green" && obj.quantity != undefined) { green = green + getPrice(obj) * obj.quantity};
        if (obj.color = "blue" && obj.quantity != undefined) { blue = blue + getPrice(obj) * obj.quantity};
    });
    
    console.log("Red - " + red + "$, Green - " + green + "$, Blue - " + blue + "$");
}

calculateSocks(input);
calculateRedHat(input);
calculateRGB(input);
