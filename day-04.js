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

// Part 2: Multiple returns (Decision Making)

// We will combine what we already know:
// - return
// - if / else
// - truthy / falsy logic

// Why multiple returns exist
// A function can return different values depending on conditions.
// Example:
// function checkAge(age) {
//   if (age >= 18){
//     return "Adult";
//   } else {
//     return "Minor";
//   }
// }
// IMPORTANT:
// - Only one return ever runs
// - Once a return happens, the function stops

// Task:
// 1. Write a function that:
//   - Takes one parameter
//   - If the value is true -> return "Value exists"
//   - Otherwise -> return "No Value"
// 2. Call the function twice:
//   - Once with a value
//   - Once without a value
// 3. Log both results

function checkAge(age) {
    if (age >= 18) {
        return "Value Exists";
    } else {
        return "No Value";
    }
}

checkAge(20);
checkAge(10);

// Locking in the Mental Model (Important)
// Seen all three stages of function maturity:
// 1. Do something
//   - console.log() inside the function
// 2. Decide something
//   - if / else + return
// 3. Produce something reusable
//   - store return value, use it elsewhere
// going forward, we'll mostly use # 3.

// Part 3: Final Step: return ends execution

// Considered one of the most common junior mistakes
// why return is an exit
// Once a return runs:
// - The function ends
// - Nothing after it runs
// - This is intentional and powerful
// Example:
// function test(value) {
//   if (!value) {
//     return "No Value";
//   }
// 
//   return "Has Value";
//   console.log("This will never run");
// }

function testReturn(value) {
    if (!value) {
        return "No Value";
    }

    return "Has Value";
}

testReturn("value");
testReturn();