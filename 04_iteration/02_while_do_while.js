// while-loop
let friends = ["Neha", "Aditya", "Ruhan", "Joy", "Ruhi", "Tanwi"];

let i = 0;
while (i < friends.length) {
    console.log(`What's up ${friends[i]}!`)
    i++;
}


// do-while loop
// the first iteration will run no matter what
let j = 1;
do {
    console.log(`Iteration no. ${j}`)
    j++;
} while (j <= 10);