const promiseOne = new Promise(function(resolve, reject){
    // Do an async task
    // DB calls, cryptography, network Call
    setTimeout(function(){
        console.log('Async task is complete');
        // resolve is a mesthod
        resolve() //it wil connect wwith .then
    }, 1000)
}) 

promiseOne.then(function() {
    console.log('Promise consumed');
})

const promiseTwo = new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    })
}).then(function(){
    console.log("Async 2 resolved");
})

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve({username: "Chai", email: "amalendu@gmail.com"})
    }, 1000)
})

// here we are using .then it means it already connected with resolve 
promiseThree.then(function(user) {
    console.log(user);
})

const promiseFour  = new Promise(function(resolve, reject) {
    setTimeout(function(){
        let error = true
        if(!error) {
            resolve({username: "hitesh", password: "123"})
        }
        else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

// using .then we will take the value, if error came using catch we wil take value
const username = promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username) => {
    console.log(username);
})
.catch(function(error) {
    console.log(error);
})
.finally(() => console.log("The promsie is either resolved or rejected"))

const promiseFive = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false
        if(!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})

// promiseFive.then

async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    }
    catch (error){
        console.log(error);
    }
}

consumePromiseFive()

// this written in try catch format

// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }
// getAllUsers()

// this is going to be .then .catch

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))