// const tinderUser = new object() // it is a singleton object
const tinderUser = {}  // it is not a single ton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email: "some@gmail.com",
    fullname: {                          // here fullname is a object and inside fullname userfullname is a object
        userfullname: {
            firstname: "amalendu",
            lastname: "maiti"
        }
    }
}

console.log(regularUser.fullname);
// to access objects inside object you have to write the console like ->
console.log(regularUser.fullname.userfullname.firstname);

// You have to use this when you call api
// console.log(regularUser.fullname?.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2) // first it declare an empty object 

const obj3 = {...obj1, ...obj2} // spread operator
console.log(obj3);


const users = [
    {
        id: 1,
        email: "amalendu@google.com"
    },
    {
        id: 2,
        email: "maiti@google.com"
    },
    {
        id: 3,
        email: "@chatgpt.com"
    }

]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser)); // it print first [property then value]

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // before apply check the property is present or not


const course = {
    coursename: "ja in hindi",
    price: "999",
    courseInstructor: "amalendu"
}

// course.courseInstructor

const {courseInstructor} = course   // to destructure it const {courseInstructure: instructure} = course
console.log(courseInstructor);      // - and then console.log(instructure);