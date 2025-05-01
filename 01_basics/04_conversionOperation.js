// string operation
let stringOne = "Hello ";
let stringTwo = "Neha";
console.log(stringOne + stringTwo); // "Hello Neha"


// automatic type conversion
console.log(6 + 9); // 15 - number
console.log("6" + 9);   // 69
console.log(typeof ("6" + 9));  // string
console.log(6 + "9");   // 69
console.log(typeof (6 + "9"));  // string
console.log("6" + "9"); // 69
console.log(typeof ("6" + "9"));    // string
console.log(3 + 6 + "9");   // 99 
console.log(typeof (3 + 6 + "9"));  // string
console.log("3" + 6 + "9"); // 369
console.log(typeof ("3" + 6 + "9"));    // string
console.log("3" + null); // 3null - string

// During Addition JS converts to string from the very first instance of a string

console.log("4" - 1);   // 3 - number
console.log("4" * 3);   // 12 - number
console.log("4" / 2);   // 2 - number
console.log(4 + null);  // 4 - number (null converts to 0)
console.log(null + 6);  // 6 - number (null converts to 0)

// During Other Operations JS converts to number



// how it happens: https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion