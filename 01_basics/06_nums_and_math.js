const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('En-IN'));



//// ------    ----  MATHS -------

console.log(Math);
console.log(Math.abs(-4)); // neegive value will be converted into poisive
console.log(Math.abs(4)); // positive will be positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.2)); // ceil will take large value 
console.log(Math.floor(4.9)); // floor will take small round value
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));
console.log(Math.random());
console.log(Math.random()*10 + 1); // multiply 10 means we shifte e value by 1 poison [to avoid the value 0 we add +1 ]
console.log(Math.floor(Math.random()*10) + 1); // now this is wraped perfectly 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)