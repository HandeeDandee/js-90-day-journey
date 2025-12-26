// Day 11 - Objects (The Next Core Data Structure)

// Why Objects Exist
// Arrays are great when:
// - All data is the same type
// - Order matters
// But what if data describes one thing with different properties?
// Example:
// - A user
// - A product
// - A task
// - A character
// - A settings profile

// That's where objects come in.

// What an object is
// An object is a container that stores related data using labels.

// Instead of:
// let name = "Alex";
// let age = 30;
// let isActive = true;

// We group them

// let user = {
//     name: "Alex"; 
//     age: 30;
//     isActive: true
// };

// Object structure (No new syntax yet)

// Example:
// let objectName = {
//      key: value,
//      key: value
// };

// key -> the label (always a string)
// value -> the data (any type)
// key/value pairs are separated by commas

// CONCEPT: Arrays vs Objects

// Arrays store values by position; this is best when data is all the same kind
// Example:
// let userData = ["Alex", 30, true];
// Problem with this:
// What is "Alex"?
// What does 30 represent?
// You're forced to remember positions

// Objects store values by meaningful labels; best when data describes one thing with different properties
// The key problem this solves:
// - You don't have to rely on position or memory - the data explains itself

// Part 2: Accessing Object Data (Dot Notation)

// How do I actually use the data inside an object?

// Dot Notation
// - Use the object name, then a dot, then the key name.
// objectName.key

let book = {
    title: "The Novice",
    author: "Taran Matharu",
    pages: 350
};

book.pages = 360;
book.isRead = true;

console.log(book);