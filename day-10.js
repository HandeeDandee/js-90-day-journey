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