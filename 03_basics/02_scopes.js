let variable1 = 10;
const variable2 = 20;
var variable3 =30;

// what we have writ inside the {} its called a scope
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
}

console.log(variable1);
console.log(variable2);
console.log(variable3);


function one() {
    const username = "amalendu"

    function two() {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

    two()
}

one();

if (true) {
    const username = "hitesh"
    if(username === "hitesh") {
        const website = " youtube "
        console.log(username + website);
    }
}

///////// ----- interesting -------- /// 

function addone(num) {
    return num + 1
}

addone(5)

const addTwo = function(num) {
    return num + 2
}

addTwo(5)