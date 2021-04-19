const fs = require("fs");
console.log("My first node application");

fs.writeFileSync("my-message.txt", "This is first message");
