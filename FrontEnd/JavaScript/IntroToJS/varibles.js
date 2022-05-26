// VARIABLES (For Storing/Assigning values)

/*
Syntax for Variables...

variableType variableName = value;
*/
// NOTE: When creating a variable the variable name should be in camelCasing

// LET is the variable type
// mcuMovies is the variable name
// 27 is the value being set/assigned to the variable
// NOTE: In JavaScript, when there is a single equal sign = the value to the right of the equal sign is being set as the value for whatever is on the left. Also, when you create a variable it is called Declaring a variable.
let mcuMovies = 27;

// The number 27 displays in the terminal when the file is run because 27 is the value that was set to the mcuMovies variable
console.log(mcuMovies); // 27

// Reassigning a new number value to the the variable
// NOTE: When updating/reassigning a new value for a variable the variable type should NOT be used
// mcuMovies = 28;

// Using/referencing the current value of the variable to reassign/update the value of the variable to a new number
// mcuMovies = mcuMovies + 2;
// mcuMovies = mcuMovies - 2;

// Shorthand way to use/reference the current value of the variable to reassign/update the value of the variable (Same as examples above)
// mcuMovies += 2;
// mcuMovies -= 2;

// Incrementing (Adding One) using ++
// Decrementing (Subtracting One) using --
// NOTE: This will reassign the new incremented or decremented value as the new value for the variable
// mcuMovies++;
// mcuMovies--;

// Reassigning a different data/primitive value type as the new value for the variable
// mcuMovies = true;
// mcuMovies = "Cornflowerblue";
// console.log(mcuMovies);

// Using math operators with variables that have number values
let avengersMovies = 4;
console.log(avengersMovies); // 4
let nonAvengersMovies = mcuMovies - avengersMovies;
console.log(nonAvengersMovies); // 23

// OTHER TYPES OF VARIABLES
// Const (Used for variables with a value that will NOT change)
const mcuPhases = 4;
// Cannot reassign/update the value of a const variable
// mcuPhases = 5;
console.log(mcuPhases); // 4

// Neither LET nor CONST can be used to Redeclare a variable
// const num = 1;
// const num = 2;
// console.log(num);
// let number = 10;
// let number = 11;
// console.log(number);

// Var (The OG Variable)
// NOTE: The var variable type is much less restrictive than LET or CONST. A new value can be Reassigned. Also, A new value can be Redeclared (AKA Using the var variable type as well as using the same variable name to set a new value). LET and CONST were created to replace VAR.
var theRealOG = 1995;
console.log(theRealOG); // 1995
theRealOG = "Reassigning";
console.log(theRealOG); // Reassigning
var theRealOG = "Redeclaring";
console.log(theRealOG); // Redeclaring

// STRING VARIABLES
const firstName = "Matt";
const lastName = "Riley";

// Concatenating String Variables
const fullName = firstName + " " + lastName;
// const fullName = "Matt" + " " + "Riley";
// const fullName = "Matt Riley";
console.log(fullName); // Matt Riley

// Using the Length Property with String Variables
console.log(fullName.length); // 10
// console.log("Matt Riley".length);

// Using Index with String Variables
console.log(fullName[9]); // y
// console.log("Matt Riley"[9]);





// NULL
// Null is the assigned value of nothing (Not the same as 0)
const nullExample = null;
console.log(nullExample); // null

// UNDEFINED
// Undefined is the absence of an assigned value
let undefinedExample;
console.log(undefinedExample); // undefined