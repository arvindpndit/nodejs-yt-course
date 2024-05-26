const fs = require("fs");
const prompt = require("prompt-sync")();

const deleteNote = () => {
  const title = prompt("Add the title of your NOte: ");

  fs.unlink(`${title}.txt`, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("Note deleted successfully");
    }
  });
};

module.exports = deleteNote;
