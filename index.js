// .
// ├── __tests__/             //jest tests
// │   ├── Employee.test.js
// │   ├── Engineer.test.js
// │   ├── Intern.test.js
// │   └── Manager.test.js
// ├── dist/                  // rendered output (HTML) and CSS style sheet      
// ├── lib/                   // classes
// ├── src/                   // template helper code 
// ├── .gitignore             // indicates which folders and files Git should ignore
// ├── index.js               // runs the application
// └── package.json           

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const path = require('path');
const inquirer = require('inquirer');
const fs = require('fs');

const DIST_DIR = require(__dirname, 'dist');
const distPath = path.join('DIST_DIR', 'team.html');

const render = require('./src/htmlTemplateLiteral.js');

const teamMembers = [];
const idArray = [];

function menuApp() {
  function genManager() {
    inquirer.prompt([
      {
        type: 'input',
        name: 'managerName',
        message: "What is the team manager's name?"
      },
      {
        type: 'input',
        name: 'managerId',
        message: "What is the manager's ID?"
      },
      {
        type: 'input',
        name: 'managerEmail',
        message: "What is the team manager's email?"
      },
      {
        type: 'input',
        name: 'managerOfficeNum',
        message: "What is the manager's office number?"
      }
    ])
      .then((answers) => {
        const manager = new Manager(
          answers.managerName,
          answers.managerId,
          answers.managerEmail,
          answers.managerOfficeNum
        );
        teamMembers.push(manager);
        idArray.push(answers.managerId);
        createTeam();
      });
  }

  function createTeam() {
    inquirer.prompt([
      {
        type: 'list',
        name: 'memberChoice',
        message: 'Which type of team member would you like to add?',
        choices: [
          'Engineer',
          'Intern',
          "I don't want to add any more team members",
        ],
      },
    ])
      .then((userChoice) => {
        switch (userChoice.memberChoice) {
          case 'Engineer':
            addEngineer();
            break;
          case 'Intern':
            addIntern();
            break;
          default:
            generateTeam();
        }
      });
  }

  function addEngineer() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: "What is the engineer's name?"
        },
        {
          type: 'input',
          name: 'engineerId',
          message: "What is the engineer's id?"
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: "What is the engineer's email?"
        },
        {
          type: 'input',
          name: 'engineerGithub',
          message: "What is the engineer's Github username?"
        }
      ])
      .then((answers) => {
        const engineer = new Engineer(
          answers.engineerName,
          answers.engineerId,
          answers.engineerEmail,
          answers.engineerGithub
        );
        teamMembers.push(engineer);
        idArray.push(answers.engineerId);
        createTeam();
      })

  }
  function addIntern() {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'internName',
          message: "What is the intern's name?"
        },
        {
          type: 'input',
          name: 'internId',
          message: "What is the intern's id?"
        },
        {
          type: 'input',
          name: 'internEmail',
          message: "What is the intern's email?"
        },
        {
          type: 'input',
          name: 'internSchool',
          message: "What is the intern's school?"
        }
      ])
      .then((answers) => {
        const intern = new Intern(
          answers.internName,
          answers.internId,
          answers.internEmail,
          answers.internSchool
        );
        teamMembers.push(intern);
        idArray.push(answers.internId);
        createTeam();
      });
  }
  function generateTeam() {
    if (!fs.existsSync('DIST_DIR')) {
      fs.mkdirSync('DIST_DIR')
    }
    fs.writeFileSync(distPath, render(teamMembers), 'utf-8');
  }
  genManager();
}

menuApp();
