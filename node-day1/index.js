/*
1️⃣ What is Node.js? (Simple Words)
Node.js lets you run JavaScript outside the browser
Built on Google V8 engine
Used for:
Backend APIs
Servers
File handling
Real-time apps (chat)
🧠 Browser JS → DOM
🧠 Node JS → Files, Servers, Databases
*/

console.log("Hello Node.Js");

// Node js Global Object

console.log(__dirname); // root directory name
console.log(__filename); // file name

// Object
console.log(process.platform); // win 32
console.log(process.version);

// Calculation
const a = 20;
const b = 10;
console.log("Add", a + b);
console.log("Subtract", a - b);
console.log("Multiply", a * b);
console.log("Divide", a / b);
