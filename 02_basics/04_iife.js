// Imediately Invoked Function Expression (IIFE)
// IIFE is used to create a seperate scope that doesn't get polluted with global scope and execute the function imediately as it is created.
// (function definition)();
// Must put ";" after an IIFE so that the executer knows where to end.

(function greetings(){
    console.log("Hello boss!");
})();

((username) => {
    console.log(`Hello ${username}`)
})("Neha");