function sayMyName() {
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName();

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

addTwoNumbers(3, "4");

function addTwoNumbers(number1, number2) {
    let result = number1 + number2
    return result // after result nothing can be printed in second line , if wanted to print then write it in upper line
}

const result = addTwoNumbers(3, 5)
console.log("Result: ", result);


function loginUserMessage(username) {
    return `${username} just logged in`
}

console.log(loginUserMessage("amalendu")) // here i defined a value 
console.log(loginUserMessage("")); // here it will print nothing
console.log(loginUserMessage()); // if i pass only () then it will print undefinde

// 
function loginUserMessage(username) {
    if(username === undefined) {
        console.log("Please enter a user name")
        return 
    }
    return `${username} just logged in`
}

// diffrent approach of uper block
function loginUserMessagee(username) {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// diffrent approach of uper block // already definde the value ,we can change the value while calling it will override the value
function loginUserMessageee(username = "sam") {
    if(!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}



console.log(loginUserMessageee())



//// 

function calculateCartPrice(val1, val2, ...num1) { // ... its called rest operator and its also called spreed operator
    return num1
}

console.log(calculateCartPrice(200, 400, 500))

const user = {
    username: "hitesh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));