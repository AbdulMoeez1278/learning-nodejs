// CRUD with file sysytem

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/mainText.txt`;

// write file
// fs.writeFileSync(filePath, "This is a simple text file");
// fs.writeFileSync("textMain.txt", "This is a simple text file");
// fs.writeFileSync(`${dirPath}/textMain.txt`, "This is a simple text main file");

// read file
// fs.readFile(filePath, "utf8", (err, data) => {
//   console.log(data);
// });

// update file
// fs.appendFile(filePath, " and file name is mainText.txt", (err) => {
//   if (!err) console.log("file is updated");
// });

// rename file
// fs.rename(filePath, `${dirPath}/mainText2.txt`, (err) => {
//   if (!err) console.log("file name is updated");
// });

// delete file
// fs.unlinkSync(`${dirPath}/mainText2.txt`)

// Major Drawback in Asynchronous operations in node
// let a = 10;
// let b = 0;

// setTimeout(() => {
//   b = 20;
// }, 2000);

// console.log(a + b); // Output 10

// Handling Asynchronous operations using promises
let a = 10;
let b = 0;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + data);
});

// Prompt Title:
// ✨ Create a Complete Beginner-to-Advanced Guide on Vanilla Node.js (Without Any Frameworks)

// Prompt Body:

// I want a complete, structured, and comprehensive guide for Vanilla Node.js (i.e., Node.js without Express or any frameworks), suitable for beginners to intermediate developers.

// The guide should include:

// Introduction to Node.js

// What is Node.js?

// Why use Node.js?

// Node.js architecture (Event loop, non-blocking I/O)

// Installation and Setup

// Installing Node.js on different OS (Windows, macOS, Linux)

// Using Node REPL

// Creating first "Hello World" app

// Core Modules in Node.js

// fs (File System)

// path

// http

// url

// events

// os

// crypto

// Code examples for each module

// Modules and NPM

// Creating your own modules

// Using require and exports

// Installing and using packages via NPM

// Event-Driven Architecture

// Understanding the EventEmitter

// Custom events

// File System Operations

// Reading and writing files (sync and async)

// Working with directories

// Streams (read/write)

// HTTP Module

// Creating a basic HTTP server

// Handling routes manually

// Sending JSON responses

// Handling query parameters and POST data

// Working with JSON and APIs

// Reading/writing JSON

// Creating a simple REST API without Express

// Error Handling

// Try-catch

// Handling async errors

// Debugging and Logging

// Using console

// Using debug module (optional)

// Using node --inspect

// Environment Variables

// Using .env files

// process.env

// Async JavaScript in Node.js

// Callbacks

// Promises

// async/await

// Project Structure

// How to structure a vanilla Node.js project

// Example folder and file layout

// Best Practices

// Clean code

// Security basics (input validation, etc.)

// Modularization

// Mini Projects (Optional)

// Build a basic CLI tool

// Build a simple file manager

// Build a simple HTTP server with routing

// ✅ Provide code examples for every concept.

// ✅ Use simple language and break down explanations clearly.

// ✅ Use headings, subheadings, and comments in code for readability.
