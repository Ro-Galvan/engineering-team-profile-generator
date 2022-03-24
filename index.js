// create questions 
// create html
// using bootstrap style the cards

    // importing the package/module: inquirer
const inquirer = require('inquirer');
    // importing the package/module: fs -file system
const fs = require('fs');

//importing the generate html template file
// const HtmlBody = require('./src/generateHtmlTemplate');  

// const init = () => {  //we dont want to write any code in global scope or easy to get lost

// };
// init();

const managerQuestions = [
    {
        type: 'input',
        name: 'manager name', // The name property is a must since it is used in the storing of answers
        message: 'Please enter the manager\'s name:'
    },
    {
        type: 'input',
        name: 'manager ID', 
        message: 'Please enter the manager\'s ID:'
    },
    {
        type: 'input',
        name: 'manager email', 
        message: 'Please enter the manager\'s email address:'
    },
    {
        type: 'input',
        name: 'manager officeNum', 
        message: 'Please enter the manager\'s office number:'
    },
];

const optionToAddTeamMember = [
    {
        type: 'list',
        name: 'add member',
        message: 'Would you like to add another team member?',
        choices: ['add an engineer', 'add an intern', 'finished']
        
    }
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineer name', 
        message: 'Please enter the engineer\'s name:'
    },
    {
        type: 'input',
        name: 'engineer ID', 
        message: 'Please enter the engineer\'s ID:'
    },
    {
        type: 'input',
        name: 'engineer email', 
        message: 'Please enter the engineer\'s email address:'
    },
    {
        type: 'input',
        name: 'engineer github username', 
        message: 'Please enter the engineer\'s github username:'
    },
];
const internQuestions = [
    {
        type: 'input',
        name: 'intern name', 
        message: 'Please enter the intern\'s name:'
    },
    {
        type: 'input',
        name: 'intern ID', 
        message: 'Please enter the intern\'s ID:'
    },
    {
        type: 'input',
        name: 'intern email', 
        message: 'Please enter the intern\'s email address:'
    },
    {
        type: 'input',
        name: 'intern school', 
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
      })
    };

// console.log(questions);

// function writeToFile(fileName, data) { //parameters
//    fs.writeFile(fileName, data, (err) => {
//        err ? console.error(err) : console.log('Success!');  //is this the promise?
//                // fs.writeFile('./dist/README.md', data, (err) => {
//                    // console.log(fileName);
//                    // console.log(data);
// });
// }
   
// function to initialize app
// function init() {
//    inquirer.prompt(generalQuestions).then((answers) => {
//     console.log(answers);
//     const manager = new Manager
        
//     }
//    })
// };


  //calling/passing the questions object from above--.using the prompt method from inquirer (object) module that I imported at the top 
//    .then(function (responses){          //after ?'s are asked .then returns promise and gives data (aka the answers) and then
//        writeToFile('./dist/README.md', generateMarkdown(responses));  //-calling writeToFile function and passing arguments: 1. fileName is now path of where to create the file 2. data is now pulling template literal from generateMarkdown file which contains answers to questions
//        // console.log(responses.title)
//        // return questions;
//    })};
// // )}

// Function call to initialize app
init();