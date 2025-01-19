// singleton

// object literals
// Object.create

// object litterals ->

const mySym = Symbol("key1")

const JsUser = {
    name: "Amalendu",
    "full name": "Amalendu Maiti", 
    [mySym]: "mykey1", // to use it as a symbol we have to wrap it as in this brackets [] // key point for interview
    age: 22,
    location: "Kolkata",
    email: "amalendu@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// to access object we have to do -> 2 way is there 
// first-way -> console.log(JsUser.email)
// second-way -> console.log(JsUser["email"])

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])

JsUser.email = "amalendumaiti@google.com"
// If the email value wanted to be fixed then we have to use freeze
// Object.freeze(JsUser)
JsUser.email = "amalendu"
// console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}

JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`); // use `` its called string interpolation // to refer same object we have to use this
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());