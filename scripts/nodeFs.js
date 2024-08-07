const fs = require("fs");
const path = require("path");

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
console.log(path.resolve(fileread));
console.log(path.normalize(fileread));
fs.open(fileread, "r", (err, fd) => {
  if (err) {
    console.error(err);
  }
  console.log("file descriptor ", fd);
  fs.close(fd);
});
fs.readFile(fileread, "utf-8", (err, data) => {
  if (err) {
    console.error(err);
  }
  //   console.log("data file  ", data);
});

const conetentWritten = ' \n let olas = "okak"';

fs.appendFile("./manna.js", conetentWritten, { flag: "a+" }, (err) => {
  if (err) {
    console.error(err);
  }
  //   console.log("file erittten ", file);
});
