# JavaScript and Classes

## 📌 OOP (Object-Oriented Programming)
OOP হলো এমন একটি প্রোগ্রামিং পদ্ধতি যেখানে **data (properties)** এবং **কাজ (methods)** একসাথে রাখা হয়।  
এটা code-কে আরও **organized**, **reusable**, এবং **manage করা সহজ** করে তোলে।

---

## 🧩 Object
JavaScript-এ Object হলো **property এবং method-এর collection**।

উদাহরণ:
```javascript
const student = {
  name: "Tufan", // property
  greet: function() { // method
    console.log("Hello, I'm " + this.name);
  }
};

student.greet(); // Hello, I'm Tufan
```

Property → ডাটা রাখে (যেমন: name)  
Method → কাজ করে (যেমন: greet())  

`"Hello".toLowerCase()` — এখানে `toLowerCase` হলো String object-এর একটি method।

---

## 💡 কেন OOP ব্যবহার করব?
- Code ছোট ছোট ভাগে ভাগ করা যায় (modular)
- একই structure দিয়ে অনেক object বানানো যায়
- Code পুনঃব্যবহার (reusability) বাড়ে
- Maintenance সহজ হয়

---

## 🛠 OOP-এর প্রধান অংশগুলো (JavaScript-এ)
1. Object Literal — `{}` দিয়ে সরাসরি object বানানো
2. Constructor Function — function দিয়ে template বানানো
3. Prototypes — object এর মাধ্যমে feature শেয়ার করা
4. Classes — modern syntax, সহজ ও readable
5. Instances — `new` keyword দিয়ে object বানানো, `this` দিয়ে property set করা

---

### 📍 Example: Constructor Function
```javascript
function Student(name) {
  this.name = name;
  this.greet = function() {
    console.log(`Hello, I'm ${this.name}`);
  };
}

const s1 = new Student("Tufan");
s1.greet(); // Hello, I'm Tufan
```

---

### 📍 Example: Class
```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

const s1 = new Student("Tufan");
s1.greet(); // Hello, I'm Tufan
```

---

## 🏛 OOP-এর ৪টি প্রধান Pillar

### 1. Abstraction (অপ্রয়োজনীয় details লুকানো)
শুধু দরকারি জিনিস দেখানো, details hide করা।
```javascript
class CoffeeMachine {
  start() {
    this.#boilWater();
    console.log("Coffee ready!");
  }
  #boilWater() { // private method
    console.log("Boiling water...");
  }
}

const machine = new CoffeeMachine();
machine.start(); // Coffee ready!
```

---

### 2. Encapsulation (ডাটা ও method একসাথে রাখা)
```javascript
class Student {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}
```

---

### 3. Inheritance (এক class থেকে আরেক class feature পাওয়া)
```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

class Teacher extends Person {
  teach() {
    console.log(`${this.name} is teaching`);
  }
}

const t1 = new Teacher("Rahul Sir");
t1.greet(); // Hello, I'm Rahul Sir
t1.teach(); // Rahul Sir is teaching
```

---

### 4. Polymorphism (একই method, ভিন্ন কাজ)
```javascript
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}
class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Dog(), new Cat()];
animals.forEach(a => a.speak());
// Dog barks
// Cat meows
```

---

## 📌 Quick Summary
- Object = properties + methods  
- Class = object বানানোর blueprint  
- Instance = class থেকে তৈরি object  
- OOP = code কে organized, reusable এবং সহজভাবে manage করার পদ্ধতি  
- ৪টি Pillar → Abstraction, Encapsulation, Inheritance, Polymorphism
