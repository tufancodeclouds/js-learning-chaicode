let myName = "Tufan     ";

// console.log(myName.trim().length);
// but I want to use like this => console.log(myName.trueLength());

String.prototype.trueLength = function() {
    return this.trim().length;
}

console.log(myName.trueLength());
console.log("Ghosh     ".trueLength());

let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function() {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

// heroPower.getSpiderPower();

Object.prototype.tufan = function() {
    console.log(`tufan is present in all objects`);
}

// heroPower.tufan(); // works because all objects inherit from Object.prototype

// myHeros.tufan(); // works because all arrays inherit from Object.prototype

// myName.tufan(); // works because all strings inherit from Object.prototype

Array.prototype.heyTufan = function() {
    console.log(`hey Tufan from array`);
}

// myHeros.heyTufan(); // works because we added a method to Array.prototype

// heroPower.heyTufan(); // does not work because heroPower is object, not an array

// myName.heyTufan(); // does not work because myName is string, not an array

// Inheritance with legacy syntax

const User = {
    name: 'John',
    email: 'john@example.com'
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

console.log(TASupport.isAvailable); // true, because TASupport inherits from TeachingSupport
 
// Teacher.__proto__ = User; // Teacher now inherits from User

// console.log(Teacher.email); // possible, because Teacher inherits from User

// Inheritance with modern syntax

Object.setPrototypeOf(Teacher, User);

console.log(Teacher.name); // possible, because Teacher inherits from User
console.log(Teacher.email); // possible, because Teacher inherits from User