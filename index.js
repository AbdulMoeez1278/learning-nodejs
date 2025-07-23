// import { x } from "./app"; // does'nt run in node but can run in js
const app = require("./app");

console.log("Hello World1");

let a = 10;
let b = 20;
let c = 30;

// console.log(a + b + c);

// interview question
// console.log in js and node are same or not - No, they are not same
// js console mechanism provided by a web browser
// nodes console.log module provides a simple debugging console

// conditionals
if (a === 20) {
  //   console.log("Matched");
} else {
  //   console.log("Not Matched");
} // Not Matched

if (a === "20") {
  //   console.log("Matched");
} else {
  //   console.log("Not Matched");
} // Not Matched

if (a == 10) {
  console.log("Matched");
} else {
  console.log("Not Matched");
} // Matched

// for loop
for (i = 0; i <= 5; i++) {
  a++;
  //   console.log(i);

  //   console.log(a);
}
// console.log(a); // prints the last value as the code completes the block section

// arrays
const arr = [1, 2, 3, 4, 5, 3];
// console.log(arr);

console.log(app); // written in the last always

// interview question
// filter use in nodejs
let result = arr.filter((item) => {
  return item >= 4;
  //   return item === 3;
  //   console.log(item);
});

console.log(result);
