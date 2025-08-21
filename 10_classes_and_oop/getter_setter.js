class User {
    constructor(email, password) {
        this._email = email;
        this._password = password;
    }

    get email() {
        return this._email.toUpperCase();
    }

    set email(value) {
        this._email = value;
    }

    get password() {
        return this._password.toUpperCase();
    }

    set password(value) {
        this._password = value;
    }
}

const tufan = new User("tufan@example.com", "password123");

console.log(tufan.email); // .email means refer to the getter method as a property, here _email is private property
console.log(tufan.password); // .password means refer to the getter method as a property, here _password is private property

// old code structure

function User2(email, password) {
    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get: function() {
            return this._email.toUpperCase();
        },

        set: function(value) {
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get: function() {
            return this._password.toUpperCase();
        },

        set: function(value) {
            this._password = value;
        }
    })
}

const ghosh = new User2("ghosh@example.com", "password456");

console.log(ghosh.email); // .email means refer to the getter method as a property, here _email is private property
console.log(ghosh.password); // .password means refer to the getter method as a property, here _password is private property

// another old code structure

const User3 = {
    _email: "h@hc.com",
    _password: "password789",

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },

    get password() {
        return this._password.toUpperCase();
    },
    set password(value) {
        this._password = value;
    }
}

const sri = Object.create(User3);

console.log(sri.email); // .email means refer to the getter method as a property, here _email is private property
console.log(sri.password); // .password means refer to the getter method as a property, here _password is private property
