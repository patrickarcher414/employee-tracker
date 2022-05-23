const inquirer = require("inquirer");
const routes = require("../routes");
const db = require("../server");
const prompts = () => {
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
    .then(({ empTracker }) => {
      if (empTracker === "View all Departments") {
        getDepts();
      }
      if (empTracker === "View all Roles") {
        getRoles();
      }
      if (empTracker === "View all Employees") {
        getEmps();
      }
      if (empTracker === "Add Department") {
        addDept();
      }
      if (empTracker === "Add Role") {
        addRole();
      }
      if (empTracker === "Add Employee") {
        addEmp();
      }
      if (empTracker === "Quit") {
        db.end();
      }
    });
};

module.exports = prompts;
