const fs = require("fs");
const path = require("node:path");

const fileread = "./mycontract.js";
fs.stat(fileread, (err, stats) => {
  if (err) {
    console.error("ERROR  DATA !!!! ", err);
  }
  console.log("Data fiel %%%% ", stats);
  console.log(stats.isFile()); // true
  console.log(stats.isDirectory()); // false
  console.log(stats.isSymbolicLink()); // false
  console.log(stats.size);
});

console.log(path.dirname(fileread));
console.log(path.extname(fileread));
console.log(path.basename(fileread));
