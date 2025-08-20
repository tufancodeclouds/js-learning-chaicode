// ES6 class declaration (syntactical sugar)

class User {
    constructor(username, email, password) {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword() {
        return btoa(this.password);
    }

    usernameCapitalized() {
        return this.username.toUpperCase();
    }
}

const tufan = new User("tufan", "tufan@example.com", "password123");

console.log(`Username: ${tufan.usernameCapitalized()}, Email: ${tufan.email}, Password: ${tufan.encryptPassword()}`);

// behind the scenes

function User2(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User2.prototype.encryptPassword = function() {
    return btoa(this.password)
}

User2.prototype.usernameCapitalized = function() {
    return this.username.toUpperCase()
}

const iceTea = new User2("tufan", "tufan@example.com", "password123");

console.log(`Username: ${iceTea.usernameCapitalized()}, Email: ${iceTea.email}, Password: ${iceTea.encryptPassword()}`);

