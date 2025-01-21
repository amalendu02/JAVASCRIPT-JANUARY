// array

const myArray = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "dj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArray[1]);

// Array methods

myArray.push(6)
myArr2.push(7)
myArr2.pop()

myArray.unshift(0)
myArray.shift()

console.log(myArray.includes(9));
console.log(myArray.indexOf(3));

const newArr = myArray.join()

console.log(myArray);
console.log(typeof myArray);


// slice, spice

console.log("A ", myArray);

const myn1 = myArr2.slice(1, 3)

console.log(myn1);
console.log("B ", myArray);
