// create questions 
// create html
// using bootstrap style the cards

// importing the package/module: inquirer
const inquirer = require('inquirer');
// importing the package/module: fs -file system
const fs = require('fs');

//importing the generate html template file
const HtmlBody = require('./src/generateHtmlTemplate');

// const init = () => {  //we dont want to write any code in global scope or easy to get lost

// };
// init();

const managerQuestions = [
    {
        type: 'input',
        name: 'manager Name', // The name property is a must since it is used in the storing of answers
        message: 'Please enter the manager\'s name:'
    },
    {
        type: 'input',
        name: 'manager ID',
        message: 'Please enter the manager\'s ID:'
    },
    {
        type: 'input',
        name: 'manager Email',
        message: 'Please enter the manager\'s email address:'
    },
    {
        type: 'input',
        name: 'manager Office Num',
        message: 'Please enter the manager\'s office number:'
    },
];

const optionToAddTeamMember = [
    {
        type: 'list',
        name: 'add member',
        message: 'Would you like to add another team member?',
        choices: ['add an engineer', 'add an intern', 'finished']
    },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer Name',
        message: 'Please enter the engineer\'s name:'
    },
    {
        type: 'input',
        name: 'engineer ID',
        message: 'Please enter the engineer\'s ID:'
    },
    {
        type: 'input',
        name: 'engineer Email',
        message: 'Please enter the engineer\'s email address:'
    },
    {
        type: 'input',
        name: 'engineer Github Username',
        message: 'Please enter the engineer\'s github username:'
    },
];
const internQuestions = [
    {
        type: 'input',
        name: 'intern Name',
        message: 'Please enter the intern\'s name:'
    },
    {
        type: 'input',
        name: 'intern ID',
        message: 'Please enter the intern\'s ID:'
    },
    {
        type: 'input',
        name: 'intern Email',
        message: 'Please enter the intern\'s email address:'
    },
    {
        type: 'input',
        name: 'intern School',
        message: 'Please enter the intern\'s school name:'
    },
];



// function to initialize app
function init() {
    inquirer.prompt(
        [
            ...managerQuestions,
            ...optionToAddTeamMember,
            ...engineerQuestions,
            ...optionToAddTeamMember,
            ...internQuestions,
            ...optionToAddTeamMember,
        ]
    ).then((answers) => {
        console.log(answers);  //managerQuestions, engineerQuestions, internQuestion
        // return managerQuestions, engineerQuestions, internQuestion
    })
};


function writeToFile(fileName, data) { //parameters
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('Success!');
        fs.writeFile('./dist/index.html', data, (err) => {
            // console.log(fileName);
            // console.log(data);
        })
    });
};
// Function call to initialize app
init();
