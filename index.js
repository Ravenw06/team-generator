// import {createTeam} from "./src/page-template";

const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern.js");
const fs = require("fs");
// const createTeam = require("./src/page-template.js")



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
                message: "Engineer's GitHub user name: "
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
    fs.writeFile("./dist/teamMember.html", createTeam(teamProfiles),err => {
        if (err){
            console.log(err);
        }
        console.log("Team generated successfully")
    })
}

function createTeam(){
    var teamProfilesString ="";
    teamProfiles.forEach(member =>{
        if(member.getRole() == "Manager"){
            teamProfilesString +=
            `
            <div class="col-md">
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">${member.getRole()}</div>
                    <div class="card-body text-primary">
                        <h3 class="card-title">Manager's Name: ${member.name}</h3>
                        <div class="card-text">
                            <div><a href="mailto:${member.email}">Manager's Email</a></div>
                        <div>Intern's ID: Manager's ID: ${member.employeeId}</div>
                        <p class="card-text">Manager's Office #: ${member.office}</p>
                    </div>
                </div>`
        }
        else if (member.getRole() == "Intern"){
            teamProfilesString +=
            `
            <div class="col-md">
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">${member.getRole()}</div>
                    <div class="card-body text-primary">
                        <h3 class="card-title">Intern's Name: ${member.name}</h3>
                        <div class="card-text">
                            <div><a href="mailto:${member.email}">Intern's Email</a></div>
                            <div>Intern's ID: Intern's ID: ${member.employeeId}</div>
                            <p class="card-text">Intern'school: ${member.school}</p>
                        </div>
                    </div>
                </div>
            </div>    
            `
        }
        else if (member.getRole() == "Engineer"){
                teamProfilesString +=
                `
                <div class="col-md">
                    <div class="card border-primary mb-3" style="max-width: 18rem;">
                        <div class="card-header">${member.getRole()}</div>
                        <div class="card-body text-primary">
                            <h3 class="card-title">Engineer's Name: ${member.name}</h3>
                            <div class="card-text">
                            <div><a href="mailto:${member.email}">Engineer's Email</a></div>
                                <div>Engineer's ID: ${member.employeeId}</div>
                                <a href="https://github.com/${member.gitHub}" target="_blank">Engineer's gitHub</a>
                            </div>
                        </div>
                    </div>
                </div>
                `
        }
    })
    var html = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
    <title>Team Profiles</title>
    </head>
    <body>
        <div class="container">
            <h2>My team</h2>
            <div class="row">
            `
        + teamProfilesString +
        `
            </div>
        </div>
    </body>
    </html>
    `
    return html
}




