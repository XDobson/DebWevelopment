
// Syntax
// function FunctionName(parameters) 
// Parameters can be put into functions and, using return, can manipulate and spit out a variable

function plus5(item) {
    item = item + 5
    return item
}

let number = 20
number = plus5(number)
console.log(number);

// We have 'number,' and that gets turned into a parameter for 'plus5.' plus5 takes its parameter (called "item" now) and manipulates it before returning it. It gets returned as number, and logged

// This is another example using a string.

function wiggle(string){
    let potato = 2
    let newString = ""
    let radish = 0 
    length = string.length;
    for (item in string){ 
        string = string.toLowerCase()
        letter = string.slice(radish, radish+1)
        radish++
        potato++
        if (potato/2 == Math.floor(potato/2)){
            letter = letter.toUpperCase()
        }
        newString = newString+letter
    }
    return newString
}

// Change this input
input = "this text is wiggly"
console.log(wiggle(input));


