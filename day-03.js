// Day 3 - Functions

function sayHello() {
    console.log("Hello!");
}

sayHello();

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