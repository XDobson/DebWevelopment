// TEMPLATE LITERALS
// New way to create or concatenate strings

// Example of a Template Literal
// Template Literals uses back-ticks (``) instead of quotes ('' or "")
const example = `This is a Template Literal`;
console.log(example); // This is a Template Literal

// Template Literals recognize line breaks
// Example of a line break in a regular string
const linesOne = "First Line\nSecondLine";
console.log(linesOne);
// const badExample = "First Line
// SecondLine";
// console.log(badExample);

// Example of a line break in a Template Literal
const linesTwo = `1st Line
2nd Line`;
console.log(linesTwo);

// Concatenation with Template Literals
// Example of Concatenation with regular strings
const myName = "Matt" + " " + "Riley";
console.log(myName); // Matt Riley

// Example of Expression Interpolation (AKA String Concatenation with Template Literals)
// Uses ${} instead of a plus sign +
let fullName = `Matt${` `}Riley`;
// let fullName = `Matt` + ` ` + `Riley`;
console.log(fullName); // Matt Riley

const middle = "John";
fullName = `Matt ${middle} Riley`;
console.log(fullName); // Matt John Riley

// Adding numbers into Template Literals
// Example of adding a number into a regular string
let nameAge1 = "My name is Matt and I am " + (2021 - 1987) + " years old";
console.log(nameAge1); // My name is Matt and I am 34 years old

// Example of adding a number into a Template Literal
let nameAge2 = `My name is Matt and I am ${2021 - 1987} years old`;
console.log(nameAge2); // My name is Matt and I am 34 years old

let currentYear = 2021;
const birthYear = 1987;
let nameAge2 = `My name is Matt and I am ${currentYear - birthYear} years old`;
console.log(nameAge2); // My name is Matt and I am 34 years old