let string = "bubbles"
let letter = ""
let potato = 0
for (item in string) {
    letter = string.slice(potato, potato+1)
    potato++
    console.log(letter)
}