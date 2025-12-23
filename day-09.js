// Day 9 - Applying the Same Pattern with More Complex Conditions

// You already know this pattern cold:
// 1.	Function receives an array
// 2.	Empty array created
// 3.	Loop through input
// 4.	if decides what to keep
// 5.	push selected items
// 6.	return new array

// What's New Today (One New Idea)

// Instead of checking on condition, we'll check multiple conditions
// Example:
//   "Keep the item only if it is a number and greater than 10."

// This introduces:
// - Logical operators (&&)
// - More expressive if statements

// New Concept: Logical AND (&&)
// In plain english:
// - conditionA && conditionB

// Means:
// - Both conditionA and conditionB must be true.
// - If either are false, the whole thing is false.
// Example:

// if (typeof item === "number" && item > 10) {
//     // runs only if BOTH are true
// }

// Task 1:

// Write a function that:
// - Is named getLargeNumbers
// - Takes one array
// - Returns a new array
// - Includes only numbers greater than 10

// Rules:
// - Use the same pattern you already know
// - Must use:
//   - a for loop
//   - an if statement
//   - typeof
//   - &&
// - Do NOT log inside the loop
// - Do NOT use any new methods

let data = [5, 12, "20", 30, true, 8, 100];

function getLargeNumbers(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] === "number" && inputArray[i] > 10) {
            result.push(inputArray[i]);
        }
    }
    return result;
}

console.log(getLargeNumbers(data));