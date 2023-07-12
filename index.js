const { prompt } = require("inquirer");
const db = require("./db");

function init() {}

function userPrompts() {
    prompt([
        {
            type: "list",
            name: "choice",
            message: "Select one of the following:",
            choices: [
                {
                    name: "List All Employees",
                    value: "List_Employees"
                },
                {
                    name: "Add Employee",
                    value: "Add_Employee"
                },
                {
                    name:"Remove Employee",
                    value: "Remove_Employee"
                },
                {
                    name: "List All Employees By Department",
                    value: "List_Employees_By_Dept"
                },
                {
                    name: "List All Employees By Manager",
                    value: "List_Employees_By_Mgr"
                },
                {
                    name: "List All Roles",
                    value: "List_Roles"
                },
                {
                    name: "Add Role",
                    value: "Add_Role"
                },
		{
                    name: "Change Employee's Role",
                    value: "Change_Role"
                },
                {
                    name: "Remove Role",
                    value: "Remove_Role"
                },
                {
                    name: "List All Departments",
                    value: "List_All_Dept"
                },
                {
                    name: "Add Department",
                    value: "Add_Dept"
                },
                {
                    name: "Remove Department",
                    value: "Remove_Dept"
                },
                {
                    name: "Exit",
                    value: "Exit"
                }
            ]
        }
    ]).then(res => {
        var choice = res.choice;

        switch (choice) {
            case "List_Employees":
                function listEmployees() {
                    db.findAllEmployees()
                    .then(([rows]) => {
                        let employees = rows;
                        console.table(employees);
                    })
                    .then(() => userPrompts());
                };
                listEmployees();
                break;
            case "Add_Employee":
                 function addEmployee() {
                    prompt([
                        {
                            name: "first_name",
                            message: "What is the employee's first name?"
                        },
                        {
                            name: "last_name",
                            message: "What is the employee's last name?"
                        }
                    ])
                    .then(res => {
                        let firstName = res.first_name;
                        let lastName = res.last_name;
                    })

                 };
                 addEmployee();
                break;
            case "Remove_Employee":
                function removeEmployee() {

                };
                removeEmployee();
                break;
            case "List_Employees_By_Dept":
                function listEmployeesByDept() {

                };
                listEmployeesByDept();
                break;
            case "List_Employees_By_Mgr":
                function listEmployeesByMgr() {

                };
                listEmployeesByMgr();
                break;
            case "List_Roles":
                function listRoles() {

                };
                listRoles();
                break;
            case "Add_Role":
                function addRole() {

                };
                addRole();
                break;
            case "Change_Role":
                function changeRole() {

                };
                changeRole();
                break;
            case "Remove_Role":
                function removeRole() {

                };
                removeRole();
                break;
            case "List_All_Dept":
                function listAllDept() {

                };
                listAllDept();
                break;
            case "Add_Dept":
                function addDept() {

                };
                addDept();
                break;
            case "Remove_Dept":
                function removeDept() {

                };
                removeDept();
                break;
            default:
                function quit() {

                };
                quit();
            }
    }
    )
}

