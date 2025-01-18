// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 345678996745664n // when we put n after the number it autometically got converted into bigint

// Reference (Non Primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj =  {
    name: "amalendu",
    age: 22,
}

const myFunction = function() {
    console.log("Hello World");
}

console.log(typeof anotherId);

/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

       */


       //////////////////////////////

       // Memory Types

       // Stack (Primitive), Heap (Non-Primitive)


let myYoutubename = "amalendumaitidotcom"

let anothername = myYoutubename
anothername = "chaiurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "amalendumaiti14gmail.com"

console.log(userOne.email);
console.log(userTwo.email);