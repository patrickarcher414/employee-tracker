const inquirer = require("inquirer");
const routes = require("../routes/index");
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
      if (data.empTracker === "Quit") {
        return;
      }
      if (data.empTracker === "View all Departments") {
        getDepts();
      }
      if (data.empTracker === "View all Roles") {
        getRoles();
      }
      if (data.empTracker === "View all Employees") {
        getEmps();
      }
      if (data.empTracker === "Add Department") {
        addDept();
      }
      if (data.empTracker === "Add Role") {
        addRole();
      }
      if (data.empTracker === "Add Employee") {
        addEmp();
      }
    });
};

module.exports = prompts;
