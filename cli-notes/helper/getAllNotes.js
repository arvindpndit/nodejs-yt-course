const { readdir } = require("node:fs/promises");

const getAllNotes = async () => {
  const files = await readdir("./");

  const notes = files.filter((file) => file.endsWith(".txt"));

  if (notes.length == 0) {
    console.log("You don't have any note, Please write a new note");
    return;
  }

  console.table(notes);
};

module.exports = getAllNotes;
