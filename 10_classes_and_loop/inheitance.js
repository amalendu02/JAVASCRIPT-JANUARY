class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`USERNAME is ${this.username}`);    
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }

    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const userr = new Teacher ("userr", "chai@gmai.com", "123")

userr.addCourse()

const userr2 = new User ("userr2");

userr2.logMe()

console.log(userr instanceof Teacher);

console.log(userr instanceof User);