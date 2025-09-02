let myHeros = ["Spiderman", "Thor", "Ironman"]
let heroPowers = {
    Spiderman: "Web-shooting",
    Thor: "Lightning & Thunder",
    Ironman: "Genius and Billionaire",

    getPower: function(hero) {
        console.log(`${hero} has ${this.hero}`)
    }
}

// Accessing the top-layer
Object.prototype.someMethod = function() {
    console.log("Every object and object Instance has this method.")
}

// Accessing lower-layer
Array.prototype.anotherMethod = function() {
    console.log("Only Arrays have this method.")
}

heroPowers.someMethod()
myHeros.someMethod()    // [ Array is also an Object ultimately ]
heroPowers.getPower.someMethod()    // [ Function is also an Object ultimately ]
myHeros.anotherMethod()    // [ only Arrays have this method ]


// linking multiple objects

const User = {
    username: "Kneysh",
    email: "nk@gmail.com"
}

const Assistant = {
    isAvailable: false,
    remote: true,
    __proto__: User    // [ this is the old way ]
}

const Tester = {
    job: "Testing the new code",
    salary: "100k"
}

const DevOps = {
    fulltime: true,
    remote: false
}

// the old way [ using __proto__ ]
DevOps.__proto__ = User    // [ __proto__ is actually a special property of the object created ]


// the modern way [ behind the scene it works like the old way ]
Object.setPrototypeOf(Tester, User)    // [ Tester gets the properties of User ]



// building trim() method from scratch
console.log("\nsmall project ...\n")
String.prototype.trueLength = function() {
    console.log(`The true length of this string: ${this.trim().length}`)
}

let myString = "   Hello World    "
myString.trueLength()