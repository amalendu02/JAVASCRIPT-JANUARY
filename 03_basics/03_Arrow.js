const user = {
    username: "amalendu",
    price: 99,

    // we use this for current context
    welcomeMessage: function() { 
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "amalendu"
//     console.log(this);
// }

// chai()

const chai = () => {
    let username = "amalendu"
    console.log(this);
}

// arrow function syntax  () => {}

const addTwo = (num1, num2) => {
    return num1 + num2
}

// writing the same line with implicit order
const AddTwo = (num1, num2) => (num1 + num2)

console.log(addTwo(3, 4))
console.log(AddTwo(3, 4))

const addtwoo = (num1, num2) => ({username: "hitesh"})

console.log(addtwoo(3, 4))