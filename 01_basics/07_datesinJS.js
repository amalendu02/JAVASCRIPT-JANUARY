// In JAVASCRIPTS date is an OBJECT

let mydate = new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);

let myCreatedDate = new Date(2023, 0, 23)
console.log(myCreatedDate.toDateString());

let myCreatedDatewithTime = new Date(2023, 0, 23, 5, 3)
console.log(myCreatedDatewithTime.toLocaleString());

let myCreatedYYMMDD = new Date("2023-01-14") // yymmdd
console.log(myCreatedYYMMDD.toLocaleString());

let myCreatedMMDDYY = new Date("01-14-2023") // yymmdd
console.log(myCreatedMMDDYY.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);

newDate.toLocaleString('default', {
    weekday: "long",
})