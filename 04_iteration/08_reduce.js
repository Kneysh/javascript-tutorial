const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach() approach:
let total = 0;

numbers.forEach((num) => total = total + num);
// console.log(total);

// reduce() approach:
// array.reduce((accumulator, currentValue) => accumulator + currentValue, initialValue)
const sum = numbers.reduce((acc, currVal) => (acc + currVal), 0);
// console.log(sum);


const shoppingCart = [
    {
        name: "Microphone",
        price: 1600
    },
    {
        name: "Speaker",
        price: 3100
    },
    {
        name: "Keyboard",
        price: 5000
    },
    {
        name: "Mouse",
        price: 3200
    }
];

function calculateCart(cart) {
    const totalPayment = cart.reduce((acc, currItem) => (acc + currItem.price), 0);
    cart.map((product) => (`${product.name} is ${product.price} BDT.`))
        .forEach((message) => console.log(message));

    console.log(`\nTotal checkout: ${totalPayment} BDT.`);
}

calculateCart(shoppingCart);