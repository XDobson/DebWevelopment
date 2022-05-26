// MATH OBJECT (Properties and Methods for Numbers)
// The Math Object is a built-in JavaScript Object/Feature that has Properties and Methods which can be used for completing Math related tasks

// PROPERTIES (Provides different values/numbers that can be used)
/*
Syntax Example...

Math.propertyName
*/

// PI Property
console.log(Math.PI); // 3.141592653589793

// METHODS
/*
Syntax Example...

Math.methodName(argument)
*/

// Min Method (Returns the lowest number)
let minOne = Math.min(1, 2, 3, 4);
console.log(minOne); // 1

let minTwo = Math.min(14, 22, 8);
console.log(minTwo); // 8

let minThree = Math.min(3, -9, 0);
console.log(minThree); // -9 (-9 is a lower number than 0)

// Max Method (Returns the largest number)
let maxOne = Math.max(1, 2, 3, 4);
console.log(maxOne); // 4

let maxTwo = Math.max(104, 10, 99);
console.log(maxTwo); // 104

let maxThree = Math.max(-9.123, 0, -13);
console.log(maxThree); // 0

// Round Method (Rounds the number to the nearest Integer (AKA Not a decimal))
let roundNumOne = Math.round(7.7);
console.log(roundNumOne); // 8

let roundNumTwo = Math.round(2.25);
console.log(roundNumTwo); // 2

let roundNumThree = Math.round(-1.1);
console.log(roundNumThree); // -1

// .5 will always round up
let roundNumFour = Math.round(0.5);
console.log(roundNumFour); // 1

// Floor Method (Rounds the number down)
// Removes the numbers after the decimal on a positive number
let floorOne = Math.floor(26.2);
console.log(floorOne); // 26

let floorTwo = Math.floor(0.9999999)
console.log(floorTwo); // 0

// If the starting number is negative the floor method will round it down to the next negative number (Ex: -1.1 to -2)
let floorThree = Math.floor(-1.1);
console.log(floorThree); // -2

// If the starting number is NOT a decimal, then the number will NOT change
let floorFour = Math.floor(-3);
console.log(floorFour); // -3

// Random Method (Returns a number from 0 up to 0.9999999999 (AKA Less than 1))
// NOTE: The Random Method does NOT accept an argument (AKA Nothing inside of the parenthesis "()")
let randomNum = Math.random();
console.log(randomNum); // 0 up to less than 1 (AKA 0 up to 0.99999)

randomNum *= 6
// randomNum = randomNum * 6;
console.log(randomNum); // 0 up to less than 6 (AKA 0 up to 5.99999)

randomNum = Math.floor(randomNum);
console.log(randomNum); // 0, 1, 2, 3, 4, or 5

randomNum++;
console.log(randomNum); // 1, 2, 3, 4, 5, or 6

// Ceil Method (Rounds the number up)
// Removes the numbers after the decimal on a negative number
let ceilNumOne = Math.ceil(1.2);
console.log(ceilNumOne); // 2

let ceilNumTwo = Math.ceil(-1.2);
console.log(ceilNumTwo); // -1

// Stays at zero. Does NOT round up to 1.
let ceilNumThree = Math.ceil(0);
console.log(ceilNumThree); // 0

// Random Number using ceil (Since Math.random() can possibly be 0 it is best NOT to use Math.ceil when creating a random whole number)
let random = Math.random();
console.log(random); // 0 up to less than 1 (AKA 0 up to 0.99999)

random *= 6
console.log(random); // 0 up to less than 6 (AKA 0 up to 5.99999)

random = Math.ceil(random);
console.log(random); // 0, 1, 2, 3, 4, 5, or 6