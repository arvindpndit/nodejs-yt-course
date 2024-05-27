const readline = require("readline");
const {
  createNote,
  readNote,
  deleteNote,
  getAllNotes,
} = require("./helper/index.js");

const showMenu = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `
  Welcome to CLI notes

    1. Create a Note
    2. Read a Note
    3. Update a Note
    4. Delete a Note
    5. Show all Notes

  Select one option from 1-5 `,
    (userInput) => {
      switch (userInput) {
        case "1":
          createNote();
          rl.close();
          break;
        case "2":
          readNote();
          rl.close();
          break;
        case "3":
          console.log("Update a NOte is your assigment");
          break;
        case "4":
          deleteNote();
          rl.close();
          break;
        case "5":
          getAllNotes();
          rl.close();
          break;
        default:
          console.log("INVALID");
      }
    }
  );
};

showMenu();
