class User {
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username); // Call the parent class constructor
        this.email = email;
        this.password = password;
    }

    logMe() {
        super.logMe(); // Call the parent class method
        console.log(`Email: ${this.email}`);
    }

    addCourse() {
        console.log(`A new course has been added by: ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@example.com", "password456");
chai.logMe();
chai.addCourse();

const masalaChai = new User("masalaChai");
masalaChai.logMe();
// masalaChai.addCourse(); // This will throw an error because Teacher extend User not User extend Teacher

console.log(chai === Teacher); // false, chai is an instance of Teacher
console.log(chai instanceof Teacher); // true, chai is an instance of Teacher

console.log(masalaChai === User); // false, masalaChai is an instance of User
console.log(masalaChai instanceof User); // true, masalaChai is an instance of User

console.log(chai === User); // false, chai is not an instance of User
console.log(chai instanceof User); // true, chai is an instance of User


// behind the scenes


// Parent Constructor Function
function User2(username) {
    this.username = username;
}

// Parent prototype method
User2.prototype.logMe = function() {
    console.log(`Username: ${this.username}`);
};

// Child Constructor Function
function Teacher2(username, email, password) {
    // call parent constructor
    User2.call(this, username);

    this.email = email;
    this.password = password;
}

// Teacher.prototype কে User.prototype থেকে inherit করানো
Teacher2.prototype = Object.create(User2.prototype);

// constructor ঠিক করে দেওয়া (default এ User constructor set হয়)
Teacher2.prototype.constructor = Teacher;

// Override logMe method
Teacher2.prototype.logMe = function() {
    // Parent method call করা
    User2.prototype.logMe.call(this);  
    console.log(`Email: ${this.email}`);
};

// New method add করা
Teacher2.prototype.addCourse = function() {
    console.log(`A new course has been added by: ${this.username}`);
};

const chai2 = new Teacher2("chai", "chai@example.com", "password456");
chai2.logMe();    
chai2.addCourse();

const masalaChai2 = new User2("masalaChai");
masalaChai2.logMe();
