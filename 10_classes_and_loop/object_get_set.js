const User = {
    _email: 'amalendu@email',
    _password: "amalendu",

    get email(){
        return this._email.toUpperCase()
    },

    set email(value) {
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);