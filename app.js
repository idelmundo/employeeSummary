const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

//make team function then fs write...

let team = []

function init() {
    inquirer.prompt([{
        type: "list",
        name: "employeeToMake",
        message: "what team member to build?",
        choices: ["Manager", "Engineer", "Intern", "done"],

    }]).then(teamMember => {
        switch (teamMember.employeeToMake) {
            case "Manager":
                runManeger()
                break;
            case "Engineer":
                runEngineer()
                break;
            case "Intern":
                runIntern()
                break;
            case "Done":
                makeTeam()
                break;
        }
    })
}

function runEngineer() {
    inquirer.prompt([{
            type: "input",
            message: "Enter Name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Employee id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email? "
        },
        {
            type: "input",
            message: "what is your github username?",
            name: "github"
        }
    ]).then(function(work) {
        let eng = new Engineer(work.name, work.id, work.email, work.github);
        team.push(eng);
        init()
    })
}

function runManeger() {
    inquirer.prompt([{
            type: "input",
            message: "Enter Name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Employee id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email? "
        },
        {
            type: "input",
            message: "Enter your office number?",
            name: "officeNumber"
        }
    ]).then(function(work) {
        let mgr = new Manager(work.name, work.id, work.email, work.github);
        team.push(mgr);
        init()
    })
}

function runIntern() {
    inquirer.prompt([{
            type: "input",
            message: "Enter Name",
            name: "name"
        },
        {
            type: "input",
            message: "What is your Employee id number?",
            name: "id"
        },
        {
            type: "input",
            message: "What is your email? "
        },
        {
            type: "input",
            message: "What school did you attend?",
            name: "github"
        }
    ]).then(function(work) {
        let eng = new Engineer(work.name, work.id, work.email, work.github);
        team.push(eng);
        init()
    })
}



fs.mkdirSync(OUTPUT_DIR)
    // Write code to use inquirer to gather information about the development team members,
    // and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```