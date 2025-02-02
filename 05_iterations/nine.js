const myNums = [1, 2, 3]

// const myTotal =  myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

// USING ARROW FUNCTION
const myTotal = myNums.reduce( (acc, curr) => acc + curr, 0)


console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "DSA",
        price: 2999
    },
    {
        itemName: "mobile dev",
        price: 3999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);