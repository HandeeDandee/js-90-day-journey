// Day 4 - Functions that Return Values

// Part 1 - Readings

// What does return actually do?
// A function can do one of two things:
// 1. Perform an action (like logging)
// 2. Produce a value that other code can use
// return is how a function produces a value.
// Think of it like a vending machine:
// - You put something in (arguments)
// - It does work internally
// - it gives something back (return)
// If it doesn't return anything, it gives back: undefined

// return immediately stops the function
// EXTREMELY IMPORTANT
// When JavaScript hits a return:
// - The function ends immediately
// - No code below it runs
// Example:
// function test() {
//   console.log("A");
//   return 5;
//   console.log("B");
// }

// Using a returned value
// When a function returns something, you can:
// - Store it in a variable
// - Use it in expressions
// - Pass it to another function
// Example:
// function double(num) {
//   return num * 2;
// }
// 
// let result = double(4); // result is 8

// Step 1: Your First Return
// Task:
// 1. Write a function that:
//   - Takes one number
//   - Returns that number multiplied by 2
// 2. Call the function and:
//   - Store the result in a variable
//   - Log the variable

function doubleNum(num) {
    return num * 2;
}

let result = doubleNum(4);