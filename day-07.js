// Day 7

// Task 1:
// 1. Write a function that:
//   - Takes on parameter (an array)
//   - Counts only numbers inside the array
//   - Returns the count
// 2. After the function:
//   - Create one test array that contains:
//     - At least 2 numbers
//     - At least one string
//     - At least 1 boolean
//   - Call the function with that array
//   - Log the returned value

let numbers = [1, 2, 3, 4, 5,];
let values = [1, 4, "Hello", false];

function countNum(array) {
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] === "number") {
            counter++;
        }
    }
    return counter;
}

let result1 = countNum(numbers);
console.log(result1);

let result2 = countNum(values);
console.log(result2);