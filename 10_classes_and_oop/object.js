// Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(Math.PI);

Math.PI = 4; // let's change the value

console.log(Math.PI); // still 3.141592653589793

const descriptor = Object.getOwnPropertyDescriptor(Math, 'PI');

console.log(descriptor);

const obj = {
    name: 'ginger tea',
    price: 5,
    isAvailable: true
}

Object.defineProperty(obj, 'name', {
    writable: false,
    enumerable: false
});

obj.name = 'black tea'; // TypeError: Cannot assign to read only property 'name' of object

console.log(obj.name); // ginger tea

for (const [key, value] of Object.entries(obj)) {
   console.log(`${key} : ${value}`); // name : ginger tea is missing due to enumerable: false
}

