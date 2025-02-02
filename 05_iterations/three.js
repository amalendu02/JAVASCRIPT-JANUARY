// for of

["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { // here object means in which element you want to make loop
    console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`)
}

// Maps
// Map's knows for its unique values, it store data in a sequence
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    'Game1' : 'NFS',
    'Game2' : 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
}
// jgyukl\