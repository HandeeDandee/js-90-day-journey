// Day 12 - Objects Inside Logic (Reading & Using Object Data)

// Part 1: Notes

// Reading Object Properties

// When you write:
// books.pages

// JavaScript:
// - Looks inside book
// - Finds the pages key
// - Returns the value

// NOTE
// - It does not modify anything
// - It's just a lookup

// Example:
// console.log(book.title);
// solely prints the title, nothing els.

// Using Object Data in an if statement

// Instead of checking raw values, we check object properties:

// Example:
// if (book.pages > 300) {
//     console.log("Long book");
// }

// NOTE: Objects don't change how logic works - they just store the values you use in logic.

// Passing an Object into a Function

// Instead of passing multiple values:
// checkBook(title, pages, author);

// We pass one object:
// checkBook(book);

// Inside the function:
// - book becomes a parameter
// - You access its properties the same way;

// Task 1:
// 1. Create an object called user with:
//   - name
//   - age
//   - isActive
// 2. Write an if statement that:
//   - Checks if the user is active
//   - Logs "User is active" if true
//   - Logs "User is not active" if false

let user = {
    name: "Nick",
    age: 27,
    isActive: true
};

if (user.isActive === true) { // if (user.isActive) also works in this situation
    console.log("User is active");
} else {
    console.log("User is not active");
};

// Part 2: Objects Inside Functions

// When you pass an object into a function:
// checkUser(user);

// The function receives the entire object, not a copy of individual values.

// Inside the function:
// - You access properties the same exact way
// - Dot notation doesn't change

// Example:
// function checkUserStatus(user) {
//     if (user.isActive) {
//         console.log("User is active");
//     } else {
//         console.log("User is not active");
//     }
// };

// Task 2:
// 1. Write a function called checkUserStatus
// 2. It should:
//   - Take one parameter (an object)
//   - Check the object's isActive property
//   - Log:
//     - "User is active" or
//     - "User is not active"
// 3. Call the function using your user object

// function checkUserStatus(user) {
//     if (user.isActive) {
//         console.log("User is active");
//     } else {
//         console.log("User is not active");
//     }
// };

// checkUserStatus(user);

// Part 3: Returning Values Instead of Logging

// We'll introduce an important distinction:

// console.log("Active");
// Shows something TO you

// return "Active";
// Sends data back to the OTHER code

// Most real functions return values, not logs.

// Example:

function getUserStatus(user) {
    if (user.isActive) {
        return "User is active";
    } else {
        return "User is not active";
    }
};

// Nothing prints from this
// To see the result:
// let status = getUserStatus(user);
// console.log(status);

// Task 3:

function getUserStatus(user) {
    if (user.isActive) {
        return "User is active";
    } else {
        return "User is not active";
    }
};

let userStatus = getUserStatus(user);
console.log(userStatus);