// const http = require("http");
// const data = require("./data"); // export another file

// const PORT = 3000;
// const hostname = "127.0.0.1";

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-type": "applicationjson" });
//   res.write(JSON.stringify(data)); // exporting data from another profile
//   res.write("<h1>Learning Nodejs</h1>");
//   res.end();
// });

// server.listen(PORT, hostname, () => {
//   // 3000 is PORT - 127.0.0.1 is hostname
//   console.log("Server is listening on 127.0.0.1:3000"); // server is running on 127.0.0.1:3000
// });

// Getting input from command line - command line input
// const fs = require("fs"); // fs module to read the file system

// const input = process.argv; // to get the input from command line

// if (input[2] == "add") {
// fs operation to write data into files
//   fs.writeFileSync(input[3], input[4]); // input 3 and 4 will be written on a seperate file - we also have to give a file name in the command
// } else if (input[2] == "remove") {
//   fs.unlinkSync(input[3]);
// } else {
//   console.log("invalid input"); // if there is an error than this output will show
// }

// make files in a folder
const fs = require("fs");
const path = require("path"); // using path module
const dirPath = path.join(__dirname, "files"); // complete path of the directory

for (i = 0; i < 5; i++) {
  fs.writeFileSync(dirPath + "/hello" + i + ".txt", "A simple file");
  //   fs.writeFileSync(dirPath + `/hello${i}.txt`, "Another simple file");
}
console.log("Directory Path is:", dirPath);

// fs.writeFileSync("file.txt", "Data is showing in the first file");

// listing the file - readdir()
// fs.readdir(dirPath, (err, files) => {
//   files.forEach((item) => {
//     console.log("Filename is:", item);
//   });
//   //   console.log(files);
// });

// listing the file - readdirSync()
try {
  const files = fs.readdirSync(dirPath);
  console.log("Files in directory:");
  files.forEach((item) => {
    console.log("Filename is:", item);
    // console.log(item);
  });
} catch (err) {
  console.error("Unable to scan directory:", err);
  //   console.log(err);
}

// Interview Question
// can we access || get files from our computer e.g., from localdisk(C), or (E) etc -- Answer is No
