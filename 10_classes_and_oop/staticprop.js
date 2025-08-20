class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`username: ${this.username}`);
    }

    static createId() {
        return `123`
    }
}

const tufan = new User('tufan1995');
// console.log(User.createId()); // tufan.createId is not a function due to it being a static method
tufan.logMe(); // username: tufan1995


class Teacher extends User {
    constructor(username, subject) {
        super(username);
        this.subject = subject;
    }

    logMe() {
        console.log(`username: ${this.username}`);
        console.log(`subject: ${this.subject}`);
    }
}

const ghosh = new Teacher('ghosh1995', 'Mathematics');
// ghosh.createId(); // ghosh.createId is not a function due to it being a static method
ghosh.logMe(); // username: ghosh1995