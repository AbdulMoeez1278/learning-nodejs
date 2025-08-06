// CRUD with file sysytem

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "crud");
const filePath = `${dirPath}/mainText.txt`;

// write file
// fs.writeFileSync(filePath, "This is a simple text file");

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
