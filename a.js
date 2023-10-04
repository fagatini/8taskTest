const fs = require("fs");

const buffer = fs.readFileSync("input.txt");
const file = buffer.toString();
const newStr = file.split("").reverse().join("");

fs.writeFile("output.txt", newStr, (err) => {
  if (err) throw err;
});
