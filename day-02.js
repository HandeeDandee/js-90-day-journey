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

// Reflection: I was surprised about how simple an if/else statement can be now that I've gotten a refresher on how it works. the forEach element is also really handy.

// Step 10 - Type Coercion
// == (loose equality): Converts the types of the values to match before comparing
// Example: "5" == 5 -> true (string "5" becomes the number 5).
// === (strict equality)
// Does NOT convert types. Values must be the same type and value.
// Example: "5" === 5 -> false (string vs number).
// Key idea: use === unless you explicitly want type coercion, as it avoids unexpected behavior.

// TASK: create two comparisons using == and two comparisons using ===.

let comparisonOne = "1" == 1;
let comparisonTwo = "true" == true;

console.log(comparisonOne);
console.log(comparisonTwo);

let strictCompOne = "1" === 1;
let strictCompTwo = "true" === true;

console.log(strictCompOne);
console.log(strictCompTwo);

// Step 11 - Mini Challenge: Combined Task
// 1. Create an array with at least 6 values MIXED
// 2. Loop through the array with forEach:
//   - For each value, use if/else to check true/false and log a message
// 3. Add two comparisons between any two values using == and === inside the loop or after it, logging the results.
// 4. Save, rune, commit and push the file.

const miniChallengeValues = [1, 23, "Hello World", false, null, "tired"];

miniChallengeValues.forEach(eachElement => {
    let looseComp = eachElement == eachElement + 1;
    let strictComp = eachElement === eachElement + 1;
    if (true) {
        return console.log("TRUE");
        console.log(looseComp);
        console.log(strictComp);
    } else {
        return console.log("FALSE");
        console.log(looseComp);
        console.log(strictComp);
    }
});