const user = {
    username: "NK Neyshan",
    password: "123$$$",
    email: "nkneyshan@example.com",

    greeting: function() {
        console.log(`Hello Mr. ${this.username}!`)
    }
}

user.greeting()
console.log(`Your email is ${user.email}`)


function User(username, password, email) {
    this.username = username
    this.password = password
    this.email = email

    this.greeting = function() {
        console.log(`Hello, ${this.username}. Welcome to the world of unkown.`)
    }

    return this    // [implicitly returns but still a good practice to return explicitly]
}

const userOne = new User("Neha", "123###", "neha@example.com")
const userTwo = new User("Neyshan", "123$$$", "nk@example.com")

console.log(`current user: ${userOne.username}`)
userOne.greeting()
console.log(`current user: ${userTwo.username}`)
userTwo.greeting()

/**
 * without 'new' keyword previous objects get over-written

 * when 'new' keyword is used
    - a new Instance ( object ) is created
    - a constructor function is called [packages all the arguments]
    - all the arguments get injected into 'this' Instance ( object )
*/
