// os Module
const os = require("os");
console.log(os);

// important functions
console.log(os.arch()); // os.arch()

// os.freemem()
console.log(os.freemem() / (1024 * 1024 * 1024));

// os.totalmem()
console.log(os.totalmem() / (1024 * 1024 * 1024));

// os.hostname()
console.log(os.hostname());

// os.platform()
console.log(os.platform());

// os.userInfo()
console.log(os.userInfo());
