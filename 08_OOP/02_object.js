// JavaScript is entirely a 'Prototype' based language
// Everthing is ultimately an 'Object' and can be treated and accessed as an 'Object'

function multiply(num1, num2) {
    return num1 * num2
}

multiply.description = "This function multiplies two numbers"   // [ new keyword-argument can be added just like an Object ]

console.log(multiply.description)
console.log(multiply(2, 6))
console.log(multiply.prototype)    // [ returns empty object ]

function product(name, price) {
    this.name = name
    this.price = price

    return this
}

product.prototype.discountedPrice = function(discount) {
    this.price = this.price - this.price * (discount/100)
    return this.price
}
// a prototype is only linked when 'new' keyword is used to create the Instance ( object )

const product1 = new product('neckband', 40)
const product2 = new product('Laptop RAM', 60)

console.log(`The price of ${product1.name} is ${product1.price}$.`)
console.log(`The discounted price of ${product2.name} is ${product2.discountedPrice(10)}$.`)


/** 

>>> The Importance of "new" keyword <<<

Here's what happens behind the scenes when the new keyword is used:

    - A new object is created: The new keyword initiates the creation of a new JavaScript object.
 
    - A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
 
    - The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes 'this', the newly created object, to be the intended return value.
 
    - The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
 
*/