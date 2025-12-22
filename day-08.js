// Day 8 - Functions That Do Something Useful

// Step by Step Function: Takes an array and returns a new array containing only numbers

let values = [1, 2, 42, "dog", true, "17", 12]

function getOnlyNumbers(inputArray) {
    let result = [];
    for (let i = 0; i < inputArray.length; i++) {
        console.log(inputArray[i]);

    }
    return result;
}

console.log(getOnlyNumbers(values));
