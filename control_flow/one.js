// If
const isUserloggedIn = true
const temperature = 41

if( temperature === 41 ) {
    console.log("less than 50");
}
else {
console.log("temperature is greater than 50")
} 
  

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


const balance = 1000

if(balance > 500) console.log("test");

if(balance < 500) {
    console.log("less than");
}
else if(balance < 750) {
    console.log("less than 750");
}

else if(balance < 900) {
    console.log("less than 750");
}
else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
const guestUser = true

if(userLoggedIn && debitCard && 2 == 2) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail || guestUser) {
    console.log("User loged in");
}