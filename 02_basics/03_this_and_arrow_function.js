// ======= "this" keyword =======
// "this" only works with objects
const user = {
    username: "Neha",
    userID: 11000245020245,
    welcome: function(){
        // console.log(`Hello ${username}, welcome to the game.`);  [wrong process]
        console.log(`Hello ${this.username}, welcome to the game.`);    // [right process]
        console.log(this);  // "this" refers to the current object only
    }
}
// user.welcome(); // Hello Neha, welcome to the game.
// user.username = "Aryan";
// user.welcome(); // Hello Aryan, welcome to the game.

// console.log(this);  // in node environment, empty object: {}.   // in browser, Window object.

function thisTest(){
    console.log(this);  // A lot of built-in function methods and stuff.
}
// thisTest();
// In normal function, "this" refers to a built-in function object consisting a lot of methods and stuff.
// In arrow function, "this" works like it works in global scope. In node environment, empty object: {} and in browser, Window object.


// ++++++++++ Arrow Function +++++++++

// explicit return
const arrowFunctionOne = () => {
    console.log("This is an arrow function.");
}

// implicit return
const arrowFunctionTwo = () => console.log("This is also an arrow function.");  // doesn't need return keyword
// const arrowFunctionTwo = () => ();  // can be used with parenthesis instead of curly braces.

arrowFunctionOne();
arrowFunctionTwo();