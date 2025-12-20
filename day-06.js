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