const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/manager.js");
const fs = require("fs");


const teamProfiles = [];

function createManager (){
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your Management ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",

        },
        {
            type: "input",
            name: "office",
            message: "What is your office number?",

        }
    ])
    .then(function(mgr){
        const manager = new Manager(
            mgr.name,
            mgr.employeeId,
            mgr.email,
            mgr.office)
        teamProfiles.push(manager);
        addEmployee();
    })
};
createManager();

function addEmployee(){
    console.log("You can now add you Engineer, Intern or exit the page")
    inquirer.prompt([
        {
        type:"list",
        name:"options",
        message: "Create Engineer, Intern or finish adding: ",
        choices:[
            "Engineer", 
            "Intern", 
            "Finish creating team profile"
            ]
        }
    ])
    .then(function(data){
        if(data.options=== "Engineer"){
            createEngineer()
        }
        else if(data.options === "Intern"){
            createIntern();
        }
        else if(data.options === "Finish creating team profile"){
            displayPage();
        }
    })
}

async function basicQuestions(){
    await inquirer.prompt([
        {
            type: "input", 
            name: "name",
            message: "What's your name?"
        },
        {
            type: "input",
            name: "employeeId",
            message: "What is your employee ID?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?",
        },
    ])
}


function createEngineer(){
        inquirer.prompt([
            {
                type: "input", 
                name: "name",
                message: "What's your name?"
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is your employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?",
            },            {
                type: "input", 
                name: "gitHub",
                message: "Engineer's GitHub URL: "
            }
        ]).then(function(eng){
            const engineer = new Engineer(
                eng.name,
                eng.employeeId, 
                eng.email,
                eng.gitHub
            )
            teamProfiles.push(engineer);
            addEmployee();
        })
}

function createIntern(){
        inquirer.prompt([
            {
                type: "input", 
                name: "name",
                message: "What's your name?"
            },
            {
                type: "input",
                name: "employeeId",
                message: "What is your employee ID?",
            },
            {
                type: "input",
                name: "email",
                message: "What is your email?",
            },
            {
                type: "input", 
                name: "school",
                message: "School of the intern: "
            }
        ]).then(function(int){
            const intern = new Intern(
                int.name,
                int.employeeId, 
                int.email,
                int.school
            )
            teamProfiles.push(intern);
            addEmployee();
        })
}

function displayPage(){
    console.log(teamProfiles)
    fs.writeFile("./dist/teamMember.html", creatTeam(teamProfiles),err => {
        if (err){
            console.log(err);
        }
        console.log("Team generated successfully")
    })
}






