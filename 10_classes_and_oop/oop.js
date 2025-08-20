const user = {
    username: "tufan",
    loginCount:8,
    signedIn: true,

    getUserDetails: function() {
        // console.log(this);
        // console.log(`username: ${this.username}`);
    }
}

user.getUserDetails();

const user2 = {
    username: "ghosh",
    loginCount:10,
    signedIn: false,

    getUserDetails: function() {
        // console.log(this);
        // console.log(`username: ${this.username}`);
    }
}

// user.getUserDetails();
// user2.getUserDetails();

// const promiseOne = new Promise()
// const dateOne = new Date()

// ekhane 'new' keyword diye constructor function theke multiple instance banano jai.

// object literal diye ekta object banano jai, kintu constructor function + new → একই design/structure থেকে অনেকগুলো object বানানো যায়

// Object literal {} → একবারে একটাই object

// new keyword আসলে নতুন execution context (object context) তৈরি করে, যেটাকে আমরা instance বলি।

/*

new keyword আসলে কী করে

জাভাস্ক্রিপ্টে new ব্যবহার করলে ৪টা ধাপ হয়:

নতুন খালি object তৈরি হয়

{}


এই নতুন object-কে constructor function এর সাথে bind করা হয়
অর্থাৎ function এর ভিতরে this এখন ওই নতুন object কে নির্দেশ করবে।

constructor function এর কোড রান হয়
যেখানে property/method গুলো ওই নতুন object এ set হয়।

function শেষ হলে স্বয়ংক্রিয়ভাবে সেই নতুন object return হয়
(তুমি manually return না করলেও)

*/

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this

    this.printUserDetails = function() {
        console.log(`username: ${this.username}`);
        console.log(`loginCount: ${this.loginCount}`);
        console.log(`isLoggedIn: ${this.isLoggedIn}`);
    }

    // this => "এই মুহূর্তে আমি যেই অবজেক্টের ভেতরে আছি, সেটাকেই বোঝাচ্ছে"
}

const userOne = new User("sriparna", 5, true);
const userTwo = new User("chai", 10, false);

userOne.printUserDetails();
userTwo.printUserDetails();

console.log(userOne.constructor);
