// basic condition
let temperature = 50;

if (temperature <= 25){
    console.log("It's chilly!");
}else if(temperature <= 30){
    console.log("Perfect time to go outside!");
}else if(temperature <= 35){
    console.log("Lower the AC!");
}else{
    console.log("It's too hot!");
}


// ternary operation
let isRaining = true;

isRaining ? console.log("Bring umbrella.") : console.log("Don't bring umbrella.");


// check empty object
let emptyObject = {};

if (Object.keys(emptyObject).length === 0){
    console.log("This is an empty object.");
}