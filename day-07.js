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

function countNum(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (typeof numbers[i] == "string") {
            console.log(numbers.length - 1);
        }
    }
    return;
}

function countNum(values) {
    for (let i = 0; i < values.length; i++) {
        if (typeof values[i] == "string") {
            console.log(values.length - 1);
        }
    }
    return;
}

