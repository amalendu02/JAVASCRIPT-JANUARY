const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

console.log(descripter);

// Math.PI = 5
// console.log(Math.PI);

const user = {
    username: "user1",
    uid: 7517,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(user, "name"));

Object.defineProperty(user, 'name', {
    // writeable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(user,"name"));

for (let [key, value] of Object.entries(user)) {
    if(typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}