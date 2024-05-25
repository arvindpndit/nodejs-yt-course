const readline = require("readline");

const showMenu = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question(
    `
  Welcome to CLI notes

    1. Create a Note
    2. Delete a Note
    3. Update a Note
    4. Read a Note
    5. Show all Notes

  Select one option from 1-5 `,
    (userInput) => {
      switch (userInput) {
        case "1":
          console.log("Creating a NOte");
          break;
        case "2":
          console.log("Delete a NOte");
          break;
        case "3":
          console.log("Update a NOte");
          break;
        case "4":
          console.log("Reading a NOte");
          break;
        case "5":
          console.log("Getting all NOtes");
          break;
        default:
          console.log("INVALID");
      }
    }
  );
};

showMenu();
