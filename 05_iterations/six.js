// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (item) => {
//     // console.log(item);
//     return item
// } )

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })

// using foreach
// const newNums = []

// myNums.forEach ( (num) => {
//     if(num > 4) {
//         newNums.push(num)
        
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book One', genre: 'Fiction', publish: 1981,
        edition: 2004 },
    {title: 'Book Two', genre: 'Non-Fiction', publish: 1992,
        edition: 2008 },
    {title: 'Book Three', genre: 'History', publish: 1991,
        edition: 20010 },
    {title: 'Book Four', genre: 'Science', publish: 2011,
        edition: 1996 },
    {title: 'Book Five', genre: 'History', publish: 2021,
        edition: 2016 },
];

let userBooks = books.filter( (bk) => bk.genre === 'History')

userBooks = books.filter( (bk) => {return bk.publish >= 1995 && bk.genre === "History" }) // here u can remove bk.publish scope or write return inside the scope
console.log(userBooks);