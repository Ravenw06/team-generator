const inquirer = require("inquirer");



class CreateEmployee{
    constructor(name, email,employeeId,role){
        this.name = name;
        this.email = email;
        this.employeeId = employeeId;
        this.role = role
    }
    getEmployee(){
        return inquirer.prompt([
            {
                type: "input",
                name: "name",
                message: "What is your name?",
                validate : name => {
                    if (name && typeof(name) === String) {
                        return true;
                    } else {
                        console.log("Please enter your name as string!");
                        return false;
                    }
                }
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is your employee ID?",
                validate : employeeId => {
                    if (typeof(employeeId) != Number ||  !employeeId) {
                        console.log("Please enter your employee ID as number!");
                    } else {
                        return true;
                    }
                }
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?",
                validate : email => {
                    if (email && email !== undefined) {
                        return true;
                    } else {
                        console.log("Please enter Project title as number!");
                        return false;
                    }
                }
            },
            {
                type: "list",
                name: "role",
                message: "what is your role?",
                choices: ["Manager", "Intern", "Engineer"],
            }    
        ])
    }
    getManager(){
        return inquirer.prompt([
            {
                type: "input",
                name: "office",
                message: "What is your office number?",
                when:({role}) => {
                    if (role.choices == "Manager"){
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
    }
    getEngineer(){
        return inquirer.prompt([
            {
                type: "input",
                name: "gitHub",
                message: "What is your gitHub account?",
                when:({role}) => {
                    if (role.choices == "Engineer"){
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
    }
    getIntern(){
        return inquirer.prompt([
            {
                type: "input",
                name: "school",
                message: "What is your school?",
                when:({role}) => {
                    if (role.choices == "Intern"){
                        return true;
                    } else {
                        return false;
                    }
                }
            }
        ])
    }
}

module.exports = CreateEmployee