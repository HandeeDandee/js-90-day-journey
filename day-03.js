// Day 3 - Functions

// Part 1: Reading
// A function is a way to:
// - Group instructions together
// - Give them a name
// - Run them wherever you want (in a sense)
// Mental Model: Think of a function like a button
// - You build the button (define the function)
// - Nothing happens yet
// - Press the button (call the function), the instructions run

// Part 3: Task
// 1. Define one function
//   - Give it a name that describes what it does
//   - Inside it, log any message you want
// 2. Call the function once so the message prints when you run
// 3. Save, commit, push

function sayHello() {
    console.log("Hello!");
}

sayHello();


// Part 5: Task
// 1. Create a new function that:
//   - Takes one parameter
//   - Logs a message using that parameter
// 2. Call the function twice:
//   - Once with a value
//   - Once without a value
// 3. Run the file locally and observe the difference
// 4. Commit and push

function greeting(name) {
    console.log("Hello " + name + "!");
}

greeting("Nick");
greeting();

// Part 6. Intro to Conditional Logic (LIGHT)
// What is an if statement?
// An if statement lets your code make a decision:
//   "Only do this if something is true"
// Example:
if (true) {
    console.log("This runs");
}
// If the code is false, the code inside does not run
// KEY CONCEPTS
// In JavaScript:
//   - undefined is treated as FALSE
//   - A real value (like a string) is treated as TRUE
// So this works:
// if (name) {
//     console.log("Name exists");
// }

// FINAL TASK
// 1. Modify your parameter-based function so that:
//   - If the parameter exists, log a friendly message using it
//   - If it does not6 exist, log a fallback message
// 2. Call the function:
//   - Once with a value
//   - Once without a value

// NOTE TO CHATGPT: instead of modifying the above function, I will create a NEW FUNCTION to complete the task

function newGreeting(name) {
    if (name) {
        return console.log("Hello " + name);
    } else {
        return console.log("No Name");
    }
};

newGreeting("Nick");
newGreeting();