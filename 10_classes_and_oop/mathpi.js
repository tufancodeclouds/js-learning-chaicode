console.log(Math.PI);

Math.PI = 4;
console.log(Math.PI);

const obj = Object.getOwnPropertyDescriptor(Math, 'PI');
console.log(obj);

// const chai = Object.create(null); // Object create by using factory function

let chai = {
    name: 'ginger tea',
    price: '250',
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true,
})

chai.name = 'green tea'; // This will not change the name property because writable is false

// it will possible when Object key is enumerable
for (const [key, value] of Object.entries(chai)) {
    console.log(`${key} : ${value}`);
}

