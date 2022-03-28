// importing the package/module: inquirer
const inquirer = require('inquirer');
// importing the package/module: fs -file system
const fs = require('fs');

//importing the generate html template file
const generateHTML = require('./src/generateHtmlTemplate');

const managerQuestions = [
    {
        type: 'input',
        name: 'managerName', // The name property is a must since it is used in the storing of answers
        message: 'Please enter the manager\'s name:'
    },
    {
        type: 'input',
        name: 'managerID',
        message: 'Please enter the manager\'s ID:'
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Please enter the manager\'s email address:'
    },
    {
        type: 'input',
        name: 'managerOfficeNum',
        message: 'Please enter the manager\'s office number:'
    },
];

const optionToAddTeamMember = [
    {
        type: 'list',
        name: 'addmember',
        message: 'Would you like to add another team member?',
        choices: ['add an engineer', 'add an intern', 'finished']
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'Please enter the engineer\'s name:'
    },
    {
        type: 'input',
        name: 'engineerID',
        message: 'Please enter the engineer\'s ID:'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Please enter the engineer\'s email address:'
    },
    {
        type: 'input',
        name: 'engineerGithubUsername',
        message: 'Please enter the engineer\'s github username:'
    },
];

const optionToAddTeamMember2 = [
    {
        type: 'list',
        name: 'addmember2',
        message: 'Would you like to add another team member?',
        choices: ['add an engineer', 'add an intern', 'finished']
    },
];

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Please enter the intern\'s name:'
    },
    {
        type: 'input',
        name: 'internID',
        message: 'Please enter the intern\'s ID:'
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Please enter the intern\'s email address:'
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Please enter the intern\'s school name:'
    },
];

const optionToAddTeamMember3 = [
    {
        type: 'list',
        name: 'addmember3',
        message: 'Would you like to add another team member?',
        choices: ['add an engineer', 'add an intern', 'finished']
    },
];


// function to initialize app
function init() {
    inquirer.prompt(
        [
            ...managerQuestions,
            ...optionToAddTeamMember,
            ...engineerQuestions,
            ...optionToAddTeamMember2,
            ...internQuestions,
            ...optionToAddTeamMember3,
        ]
    ).then((answers) => {
       writeToFile('myhtml.html', generateHTML(answers))
        console.log('answers', generateHTML(answers));  
    })
};


function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!');
        fs.writeFile('./dist/index.html', data, (err) => {
            // console.log(fileName);
            console.log('file data', data);
        })
    });
};
// Function call to initialize app
init();
