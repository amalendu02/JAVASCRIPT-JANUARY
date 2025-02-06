const user = {
    username: "amalendu",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function() {
        console.log(this);
    }
}


console.log(user.username);
console.log(user.getUserDetails());


function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    return this
}

const userOne = User("Amalendu", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne);
console.log(userTwo);