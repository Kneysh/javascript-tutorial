// {} defines block scope or local scope. Everything outside {} is a part of global scope.
// block scope variables can only be accessed in it's own block.
// any changes made to a global variable inside a local scope will be applied only inside that local scope.

let a = 40;
function scopes(){
    let a = 50;
    console.log("Local value: ", a);
}

// console.log("Global value: ", a);   // 40
// scopes();   // 50


// +++++++++ nested scopes ++++++++++

function one(){
    // [local scope one]
    const username = "Neha";
    function two(){
        // [local scope two]
        const age = 20;
        return `The age of ${username} is ${age} years.`;
    }
    // console.log(age);    [cannot access]

    return two; // returns the entire definition of function two
}
// [global scope]
// two();   [cannot access]

const func = one();     // stores the entire definition of function two into the variable func
console.log(func());    // func is now same as function two and can be executed as func() like two()


// +++++++++++++++++++++++++++++++++++++++++++++++++++

// Expression: works like a function but is a variable, so cannot be accessed before declaring
// console.log(add(3, 5));  [cannot access]
const add = function(num1, num2){
    return num1 + num2;
}
console.log(add(3, 5));