// ========================== Numbers ========================== //

const balance = 300;
const accountNumber = new Number(101134520245);     // access to multiple number methods (built-in)

const string_accountNumber = accountNumber.toString(); // access to all the string methods (built-in)

const fixed_accountNumber = accountNumber.toFixed(2);   // number of digits after decimal point

const precise_acountNumber = accountNumber.toPrecision(4);  // total number of digits

const locale_accountNumber = accountNumber.toLocaleString();    // comma separated string


// ========================== Maths ========================== //

const first_randomNumber = Math.random();     // (0 - 1)
const second_randomNumber = Math.random()*10;  // (0 - 10)
const third_randomNumber = (Math.random()*10) + 1;  // (1 - 11)
const forth_randomNumber = Math.floor((Math.random()*10) + 1);  // (1 - 10)

const minValue = 1;
const maxValue = 6;

const diceRoll = Math.floor((Math.random() * (maxValue - minValue + 1)) + minValue);    // (1 - 6)
console.log(diceRoll);