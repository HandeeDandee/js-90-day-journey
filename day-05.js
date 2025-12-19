// RECAP: Early Return
// Early return works like a safeguard for your function, and also makes your code:
// - easier to read
// - easier to modify
// - easier to debug
// Example:

// function checkAccess(user) {
//   if (!user) return "No user";
//   if (!user.isActive) return "Inactive user";
//   if (!user.isAdmin) return "No access";

//   return "Access granted";
// }

// In the function, each if statement will be run until one is found true, and if none of them are found true, the final return will follow.
// the if statements for early return are organized from broadest coverage to most unique. In the case of the above function:
// - First if statement is IF NOT A USER -> stop
// - Second if statement is IF NOT AN ACTIVE USER -> stop
// - Third if statement is IF NOT AN ADMIN -> stop

// How to think about writing early return
// Ask yourself:
// 1. What is the worst-case / invalid input?
// 2. Check that first -> return
// 3. Move to the next requirement
// 4. keep going until only the success case remains

// Example usage:
// const user = {
//     isActive: true,
//     isAdmin: false
// };

// checkAccess(user); // ABOVE FUNCTION ON LINE 8
// -> "no access"

// Another way to think about it:
// Early return turns complicated logic into a checklist

// Day 5: Arrays (from zero)

// Part 1: Readings
// What is an Array?
// An array is a single variable that holds multiple values, in a specific order.
// Instead of this:
// let fruit1 = "apple";
// let fruit2 = "banana";
// let fruit3 = "orange";

// you do this:
// let fruit = ["apple", "banana", "orange"];

// Array Positions
// Arrays are ZERO-BASED
// ["apple", "banana", "orange"]
//     0        1         2
// First item -> index 0
// Second item -> index 1
// Accessing a value:
// fruits[0]; // "apple"

// Why Arrays Matter
// Arrays let yo8u:
// - Group related data
// - Loop over values
// - Apply logic repeatedly
// - Avoid copy-paste code

// Arrays are the foundation of:
// - Lists
// - Tables
// - User Data
// - Almost everything dynamic

// Task 1:
// 1. Create an array with at least 3 values (any type is fine)
// 2. Log:
//   - The first item
//   - The second item
// 

let cars = ["sedan", "SUV", "Truck"];
cars[0];
cars[1];

// Part 2: Understanding .length

// What is .length?
// Every array in JS has a built-in property called length.
// .length tells you how many items are inside the array.

// Example:
// let fruit = ["apple", "banana", "orange"];

// fruits.length; // 3

// IMPORTANT
// It does not care what the items are, only how MANY there are

// Why .length matters
// Imaging you don't know how big an array is:
// - Maybe today it has 3 items
// - Tomorrow it could have 100, or it could have 1
// Hard-coding indexes ([0], [1], [2]) breaks when data changes.
// .length lets your code adapt automatically

// CRITICAL CONCEPT: Index vs Length
// if the LENGTH of an array is 3, then the INDEX of that same array is 2 (.length - 1)
// Why? Remember this is due to arrays being a ZERO-BASED INDEX (they start at 0)

// Task 2:
// 1. Using the array already created above:
//   - Log the last item in the array
//   - Use .length to do this

cars[cars.length - 1];

// Part 3: Loops

// What do loops solve
// Using the above array:
// let fruit = ["apple", "banana", "orange"];
// If you wanted to log every item without loops, you'd have to do this:
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// That only works because:
// - We know how many items are in the array
// - The array never changes
// Real data will not work like that

// What is a loop?
// A loop is a way to say: "Repeat this action for every item in the array"
// Instead of writing the same code multiple times, you write it once, and the loop handles repetition

// The for loop (conceptual)
// This is the most basic loop in JavaScript.
// Example:
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// Let's break it down conceptually:
// - i starts at 0
// - The loops runs while i is less than the array length
// - Each time:
//   - i increases by 1
//   - The next array item is accessed.
// Essentially Automated Counting

// VERY IMPORTANT CONCEPT
// A loop is just a counter + a condition + repetition

// Task 3:
// 1. Using the same array (cars):
//   - Write a for loop
//   - Inside the loop, log each item in the array

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

