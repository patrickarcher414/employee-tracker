const inquirer = require("inquirer");

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
        return;
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
      return;
    });
};
const addEmp = () => {
  console.log("hello from addEmp!");
};
const addRole = () => {
  console.log("hello from addRole!");
};
const addDept = () => {
  console.log("hello from addDept!");
};
const getEmps = () => {
  console.log("hello from getEmps!");
};
const getRoles = () => {
  console.log("hello from getRoles!");
};
const getDepts = () => {
  console.log("hello from getDepts!");
};

module.exports = prompts;
