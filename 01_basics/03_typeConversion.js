// original value
const age = 19;
const password = "34A5bc";
const temperature = null;
const isLoggedIn = true;

// value conversion
let converted_age = String(age);
let converted_pass = Number(password);
let converted_temp = Number(temperature);
let converted_loggedIn = Boolean(isLoggedIn);

// checking result
console.log(typeof age);    // number
console.log(converted_age); // "19"
console.log(typeof converted_age);  // string
console.log(converted_pass);    // NaN
console.log(typeof converted_pass); // number
console.log(temperature);   // null
console.log(converted_temp);    // 0
console.log(typeof converted_temp); // number
console.log(converted_loggedIn);    // 1
console.log(Boolean(2));    // true
console.log(Boolean(""));   // false
console.log(Boolean("neha"));  // true