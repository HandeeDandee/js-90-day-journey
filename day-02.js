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