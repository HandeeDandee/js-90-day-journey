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

if (user.isActive === true) {
    console.log("User is active");
} else {
    console.log("User is not active");
};