const inquirer = require("inquirer");
const prompt = () => {
  inquirer
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "empTracker",
        choices: [
          "View all Departments",
          "View all Roles",
          "View all Employees",
          "Add Department",
          "Add Role",
          "Add Employee",
          "Quit",
        ],
      },
    ])
    .then((data) => {
      if (data.choices === "Quit") {
        return;
      }
      prompt();
    });
};

module.exports = prompts;
