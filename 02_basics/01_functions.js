function sayMyName(){
    console.log("Neha Ahmed");
}
sayMyName();

function welcomeMessage(username = "Player"){
    return `Hello ${username = "User"}, welcome to the game!`;   // "User" has higher specificity than "Player"
}
console.log(welcomeMessage());

// A function stops at return. Nothing gets executed after that.


// A function can take infinite arguments using "...parameter".
function cartPrices(...prices){
    return prices;  // returns an array of all the arguments passed
}
console.log(cartPrices(200, 250, 1000));


// A function can take any datatype as an argument.

function priceMessage(product){
    return `${product.name} is priced at ${product.price}.`;
}

const addedProduct = {
    name: "RTX 5060",
    price: "2000USD"
}

console.log(priceMessage(addedProduct));