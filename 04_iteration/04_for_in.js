// for-in
// not applicable for Map, best for object
// treats everything as an object

const friends = ["Neha", "Aditya", "Ruhan", "Joy", "Ruhi", "Tanwi"];

for (const key in friends) {
    // treats the array as an object: {index: element}
    // console.log(key);   // index of every element
    // console.log(friends[key]);  // every element
}


const friend = {
    name: "Neha",
    age: 20,
    firstMeet: 2007,
    hobby: ["gaming", "cyber-security", "reading", "travel"] 
}

for (const key in friend) {
    // console.log(friend.key)  [undefined]
    // console.log(`${key} => ${friend[key]}`);
}


for (const index in "Neha") {
    // console.log(index);  // index of each character
}