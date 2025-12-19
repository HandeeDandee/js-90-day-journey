// RECAP: Early Return
// Early return works like a safeguard for your function, and also makes your code:
// - easier to read
// - easier to modify
// - easier to debug
// Example:

// function checkAccess(user) {
//   if (!user) return "No user";
//   if (!user.isActive) return "Inactive user";
//   if (!user.isAdmin) return "No access";

//   return "Access granted";
// }

// In the function, each if statement will be run until one is found true, and if none of them are found true, the final return will follow.
// the if statements for early return are organized from broadest coverage to most unique. In the case of the above function:
// - First if statement is IF NOT A USER -> stop
// - Second if statement is IF NOT AN ACTIVE USER -> stop
// - Third if statement is IF NOT AN ADMIN -> stop

// How to think about writing early return
// Ask yourself:
// 1. What is the worst-case / invalid input?
// 2. Check that first -> return
// 3. Move to the next requirement
// 4. keep going until only the success case remains

// Example usage:
// const user = {
//     isActive: true,
//     isAdmin: false
// };

// checkAccess(user); ABOVE FUNCTION ON LINE 8
// -> "no access"

// Another way to think about it:
// Early return turns complicated logic into a checklist