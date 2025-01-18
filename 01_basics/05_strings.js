const name = "amalendu"
const repoCount = 50

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);

const gameName = new String('hiteshhc')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

// trim
const newStringname = "   amalendu    ";
console.log(newStringname);
console.log(newStringname.trim());

// replace
const url = "https://amalendu/ufo%20df"

console.log(url.replace('%20', '-'))

console.log(url.includes('buty'))

// split method
console.log(gameName.split('-'));