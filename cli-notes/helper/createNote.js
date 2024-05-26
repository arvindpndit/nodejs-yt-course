const fs = require("fs");
const prompt = require("prompt-sync")();

const createNote = () => {
  const title = prompt("Add the title of your NOte: ");
  const content = prompt("Add the content of your NOte: ");

  fs.writeFile(`${title}.txt`, content, (err) => {
    if (err) {
      console.error(err);
    } else {
      // file written successfully
      console.log("Note created successfully");
    }
  });
};

module.exports = createNote;
