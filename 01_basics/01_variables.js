const accountID = 102359;   // cannot be changed
let accountEmail = "aryan@gmail.com";   // can be changed
var accountPassword = "012$22@PrT";     // doesn't follow block scope and functional scope 
accountCity = "Singapore City";     // never ever
let accountState;   // undefined

// single variable
console.log(accountID);

// multiple variable
console.table([accountID, accountEmail, accountPassword, accountCity, accountState]);