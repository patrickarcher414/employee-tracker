const inquirer = require("inquirer");
const routes = require("../routes/index");
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
    .then((data) => {
      if (data.choices === "Quit") {
        db.end();
      }
      if (data.choices === "View all Departments") {
        getDepts();
      }
      if (data.choices === "View all Roles") {
        getRoles();
      }
      if (data.choices === "View all Employees") {
        getEmps();
      }
      if (data.choices === "Add Department") {
        addDept();
      }
      if (data.choices === "Add Role") {
        addRole();
      }
      if (data.choices === "Add Employee") {
        addEmp();
      }
    });
};

module.exports = prompts;
