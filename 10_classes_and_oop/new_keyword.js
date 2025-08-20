function multipleBy5(num) {
    return num * 5
}

// console.log(multipleBy5(10));

multipleBy5.val = 5

// console.log(multipleBy5.val);

// console.log(multipleBy5.prototype);

function createUser(username, score) {
    this.username = username
    this.score = score 
}

createUser.prototype.increment = function() {
    this.score++;
}

const user1 = new createUser("Tufan", 10);
user1.increment();

console.log(user1);

/*

Here's what happens behind the scenes when the new keyword is used:

1. A new object is created: The new keyword initiates the creation of a new JavaScript object.
new keyword দিলে প্রথমে JavaScript একদম নতুন, খালি object তৈরি করে।
const obj = {} // এরকম একটা খালি object তৈরি হয়


2. A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
সেই নতুন তৈরি object টাকে constructor function-এর .prototype এর সাথে link করে দেওয়া হয়।
তাই ওই object constructor-এর prototype-এ যেসব property বা method আছে, সেগুলো use করতে পারে।
function User() {}
User.prototype.sayHello = function() { console.log("Hello"); }
const u1 = new User();
u1.sayHello(); // কাজ করবে কারণ prototype link হয়ে গেছে


3. The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
এরপর constructor function-টা তোমার দেওয়া arguments দিয়ে call হয় এবং this সেট হয় সেই নতুন object-এর দিকে।
উদাহরণ:
function User(name) {
    this.name = name; // এখানে this → নতুন object
}


4. The new object is returned: After the constructor function has been called, ifit doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
যদি constructor function থেকে তুমি আলাদা করে কোনো object বা array return না করো,
তাহলে JavaScript ধরে নেয় constructor-এর ভিতরের this (নতুন object) ই return হবে।
উদাহরণ:
function User(name) { this.name = name; }
const u = new User("Tufan"); // u → { name: "Tufan" }

5. Lastly the new created object is assigned to your variable.
সবশেষে সেই নতুন তৈরি object তোমার variable এ assign হয়ে যায়।
উদাহরণ:
u = { name: "Tufan" }

*/