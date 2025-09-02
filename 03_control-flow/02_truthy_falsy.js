// Falsy values: false, 0, -0, null, undefined, "", 0n (BigInt), NaN

// Truthy values: anything not falsy, falsy values as string ("false", "0"), " ", [], {}, any number except 0 or -0, etc.


if (!username){
    console.log("There is no username present here.");
}else{
    console.log("This is your username: ", username);
}


// Nullish Coalescing Operator (??): null, undefined

let value1 = null ?? 15;    // value = 15 [15 or any other value will come from another function]
let value2 = undefined ?? 10;   // value = undefined

// null ?? functionOne() ?? functionTwo() .... so on