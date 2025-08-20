function SetUsername(username) {
    this.username = username;
}

function createUser(username, email, password) {
    // Call SetUsername with the current context
    // normally function এর this নির্ভর করে কে call করছে তার উপর, কিন্তু .call() use করলে তুমি ইচ্ছামতো ঠিক করে দিতে পারো
    SetUsername.call(this, username); 

    this.email = email;
    this.password = password;
    
}

const user1 = new createUser("Tufan", "tufan@example.com", "password123");

console.log(user1);


// another example

function introduce(city, country) {
  console.log(`Hi, I am ${this.name}, from ${city}, ${country}`);
}

const person1 = { name: "Tufan" };
const person2 = { name: "Sriparna" };

// person1 কে this করে call করা
introduce.call(person1, "Kolkata", "India");  
// 👉 Hi, I am Tufan, from Kolkata, India

// person2 কে this করে call করা
introduce.call(person2, "Delhi", "India");  
// 👉 Hi, I am Sriparna, from Delhi, India
