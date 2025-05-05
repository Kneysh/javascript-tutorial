function sayMyName(){
    console.log("Neha Ahmed");
}
sayMyName();

function welcomeMessage(username = "Player"){
    return `Hello ${username = "User"}, welcome to the game!`   // "User" has higher specificity than "Player"
}
console.log(welcomeMessage());

// A function stops at return. Nothing gets executed after that.