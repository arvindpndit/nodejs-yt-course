const fs = require("fs");
const prompt = require("prompt-sync")();

const readNote = () => {
  const title = prompt("Add the title of your NOte: ");

  fs.readFile(`${title}.txt`, "utf8", (err, data) => {
    if (err) {
      console.error(err);
    } else {
      console.log(data);
    }
  });
};

module.exports = readNote;
