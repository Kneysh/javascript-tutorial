// Object Literals

const mySym = Symbol("key01");  // creating symbol to use later
const User = {
    name: "Neha",
    "full name": "Neha Ahmed",
    age: 20,
    email: "neha@gmail.com",
    hobby: ["painting", "system-security", "reading"],
    [mySym]: "neha001"
}
// console.log(User);
// console.log(User.name);  // accessing data from object
// console.log(User["full name"]);  // better way to access than using dot(.)
// console.log(User[mySym]);    // Symbols can be only accessed this way

// adding new data to the object from outside
User["profession"] = "Chief Security Officer, NeyshTech";
User.greetings = function(){
    console.log(`Hello ${this.name}, nice to meet you.`);   // "this" keyword refers to the object itself
}
Object.freeze(User);    // cannot change anything after this
// console.log(User);
// console.log(User.greetings());


// singleton
// Object.create() or Object()

const newUser = Object();
newUser.name = "Anannya";
newUser.email = "anu@gmail.com";
newUser.age = 21;
// console.log(newUser);

const player = {
    username: {
        screenName: "lucifer",
        uniqueID: 11020235
    },
    level: "Intermediate"
}
// console.log(player["username"]["screenName"]);
// console.log(player.username["uniqueID"]);

// combining multiple Objects
const obj1 = {1:7, 2:"b", 3:"c"};
const obj2 = {4:"d", 5:"e", 6:"f"};

// Object.assign(target, source)  =>  adds source object to target object and returns it.
// const obj3 = Object.assign(obj1, obj2);
// console.log(obj1);
// console.log(obj3);

// by adding an empty target object the original objects remain unchanged
// const obj3 = Object.assign({}, obj1, obj2);
// console.log(obj1);  // unchanged
// console.log(obj3);  // new object

// using spread operator is the best
const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// Object methods (built-in)
// console.log(Object.keys(obj3)); // creates an array of all the keys
// console.log(Object.values(obj3)); // creates an array of all the values
// console.log(Object.entries(obj3)); // creates a 2D array consisting multiple arrays of [key, value] pairs array: [[key1, value1], [key2, value2]]


// Object Destructuring
const employee = {
    fullName: "Neha Ahmed",
    role: "Chief Security Officer",
    salary: "150K",
}

const {fullName: name} = employee;
// console.log(name);