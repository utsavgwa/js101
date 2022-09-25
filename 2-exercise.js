var greeting = "Hello World";
var something = greeting/2;

something;  // number NAN

console.log(typeof something); // number
Number.isNaN(something); // true
//NUMBER.isNANisa method that returns true if the value is NaN, otherwise false.

console.log(Number.isNaN(something)); // true

Number.isNaN(greeting); // false
console.log(Number.isNaN(greeting)); // false

console.log(typeof greeting); // string