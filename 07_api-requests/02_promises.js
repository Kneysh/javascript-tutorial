const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise one")
    }, 1000)
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Promise two")
    }, 1000)
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("Promise three")
        resolve("Promise three is resolved")
    }, 1000)
})

promiseThree.then((message) => {
    console.log(message)
})

new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false
        if (!error) {
            console.log("Promise four")
            resolve("Promise four has been resolved")
        } else {
            reject("Something went wrong!")
        }
    }, 1000)
})
.then((message) => {
    console.log(message)
})
.catch((error) => {
    console.log(error)
})
.finally(() => {
    console.log("TASK 4 COMPLETED")
})

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false
        if (!error) {
            console.log("Promise five")
            resolve({username: "Kneysh", email: "nk@example.com", password: "123###"})
        } else {
            reject("Something went wrong. Try again later.")
        }
    }, 1000)
})

promiseFive.then((user) => {
    console.log("received user data")
    return user.username
})
.then((username) => {
    console.log("The username: ", username)
})
.catch((error) => console.log(error))

// async-await method
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive();


// fetching github info
const url = "https://api.github.com/users/kneysh";

// async-await method
async function getUserInfo(url) {
    try {
        console.log("fetching data ...")
        const response = await fetch(url)
        const data = await response.json()
        console.log(`${data.login} || ${data.name} || ${data.html_url}`) 
    } catch (error) {
        console.log(error)
    }
}

getUserInfo(url);

// then-catch-finally method
fetch(url)
.then((response) => {
    const data = response.json()
    return data
})
.then((data) => {
    console.log(`Username: ${data.login} || Name: ${data.name} || Repos: ${data.repos}`)
})
.catch((error) => console.log(error))
.finally(() => console.log("Done fetching data using promise method"))