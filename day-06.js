// Day 6 - Deep Dive into Functions

// Part 1: What a function really is

// A function is: a reusable block of code that performs a specific job when called.
// Key Ideas:
// - A function does nothing until it is called
// - A function can receive data (parameters)
// - A function can give data back (return value)
// - A function creates a boundary - code inside it doesn't run unless invoked

// Think of a function like a machine:
// - You put something in
// - It does work
// - It may give something back

// Example:
// function sayHello() {
//     console.log("Hello");
// }
// This does not run
// This DEFINES the function

// sayHello();
// this RUNS the function

// Part 3: Your First Function (that returns a value)

// return
// When a function uses return:
// - It sends a value back to wherever the function is called
// - It immediately stops the function

// Example:
// function addOne(number) {
//     return number + 1;
// }

// Key Points
// - number is a parameter
// - The function gives back number + 1
// - Nothing runs after return

// Mental Model
// Think of return as "Here's the result of my work done. I'm done."
// If a function doesn't return anything, JavaScript gives back undefined.

// Task 1:
// 1. Define a function:
//   - named addTwo
// 2. It should:
//   - Take one parameter
//   - Return that parameter plus 2
// 3. Call the function once and:
//   - Log the returned value to the console.

function addTwo(number) {
    return number + 2;
}

console.log(addTwo(1));

// Part 3: Functions + Parameters (Deeper Understanding)

// Parameters vs Arguments (Reinforced)
// Example:
// function addTwo(number) {
//     return number + 2;
// }

// addTwo(5);

// number -> parameter (placeholder)
// 5 -> argument (actual value)

// Think of it like:

// Parameter = labeled box
// Argument = thing you put in the box

// The function does not care what the value is -- it only cares about what it's told to do with it.

// Part 4: Using Return Values

// When a function returns a value, you can:
// - Store it in a function
// - Use it in another expression
// - Pass it into another function later

// Example:
// let result = addTwo(5);
// console.log(result);

// The function runs -> returns a value -> that value gets stored.

// Task 2:

// 1. Call your addTwo function twice with different parameters
// 2. Store each returned value in its own variable
// 3. Log both variables

let resultOne = addTwo(1);
let resultTwo = addTwo(2);

console.log(resultOne);
console.log(resultTwo);