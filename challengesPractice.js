// Challanges Practice

// Challenge 1:
import chalk from "chalk"; // gives error - SyntaxError: Cannot use import statement outside a module - if you're using Chalk v5+ only supports ES modules.
console.log(chalk.blue("Hello World!")); // print the output in blue color

// if you want to use require to include package you have to use the Chalk v4 - then the require() will work
// const chalk = require("chalk");
// console.log(chalk.blue("Hello World")); // print the output in blue color
// console.log(chalk.yellow("Abdul Moeez")); // print the output in yellow color
