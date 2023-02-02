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

const directoryDist = require(__dirname, 'dist');
const distPath = path.join(directoryDist, 'team.html');


const teamMembers = [];

function genManager() {
  const questions = [
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
];
}
