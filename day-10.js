// Day 10 - Functions with Multiple Parameters

// Part 1: New Concept (Only One)

// So far, you've seen:
// function doSomething(inputArray) {...};

// Now we introduce:
// function doSomething(inputArray, value) {...};

// What is a parameter?
// A parameter is a placeholder variable inside the function definition.

// Example:
// function greet(name, age) {
//     // name and age are parameters
// }

// When you call the function, you pass the arguments:
// greet("Nick", 27);

// ORDER MATTERS
// The first argument maps to the first parameter, the second to the second, etc.

// Example:
// function add(a, b) {
//     return a + b;
// }

// add(2, 3); // returns 5

function multiply(a, b) {
    return a * b;
}

console.log(multiply(3, 4)); // should return 12

// Task 2:

// Write a function named getNumbersGreaterThan(inputArray, limit)
// It should:
// 1. Take an array
// 2. Take a number (limit)
// 3. Return a new array containing only numbers greater than limit

let taskTwoData = [5, 12, "20", 30, true, 8, 100];

function getNumbersGreaterThan(inputArray, limit) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] === "number" && inputArray[i] > limit) {
            result.push(inputArray[i]);
        }
    }
    return result;
}

console.log(getNumbersGreaterThan(taskTwoData, 10));
// expected: [12, 30, 100]

// Task 3:
// Function should:
// 1. Only return numbers
// 2. greater than min
// 3. less than max

let taskThreeData = [1, 5, 10, 15, 20, 25, "30", false];

function getNumbersBetween(inputArray, min, max) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        if (typeof inputArray[i] === "number" && inputArray[i] > min && inputArray[i] < max)
            result.push(inputArray[i]);
    }
    return result;
}

console.log(getNumbersBetween(taskThreeData, 5, 20));
// expected: [10, 15]