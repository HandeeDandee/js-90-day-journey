// Day 2 - Starting file

console.log("Day 2 is underway!");
console.log("This is my second line of code written for this file!");
console.log("I'm looking forward to learning more about JavaScript");

if ("Hello") {
    return console.log("This is truthy");
}

if (0) {
    return console.log("This is falsy");
}

const testValues = [1, "Hello", null];

console.log(testValues[0]);

testValues.forEach(function (value) {
    console.log(value);
});

// Task
// 1. Loop through the array above created using forEach.
// 2. For each value, use an if/else statement to check if it's truthy or falsy.
// 3. log a message for each element indicating which it is.

testValues.forEach(eachElement => {
    if (true) {
        return console.log("this is truthy");
    } else {
        return console.log("this is falsy");
    }
});