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
        name: 'ManagerName', // The name property is a must since it is used in the storing of answers
        message: 'Please enter the manager name?'
    },
    {
        type: 'input',
        name: 'Manager ID', 
        message: 'Please enter the manager\'s ID?'
    },
    {
        type: 'input',
        name: 'Manager Email', 
        message: 'Please enter the manager\'s email address?'
    },
    {
        type: 'input',
        name: 'Manager officeNum', 
        message: 'Please enter the manager\'s office number?'
    },
];
const idAndEmailQuestions = [
    {
        type: 'input',
        name: 'ID', 
        message: 'Please enter the employee\'s ID?'
    },
    {
        type: 'input',
        name: 'Email', 
        message: 'Please enter the employee\'s email address?'
    }
];

const optionToAddTeamMember = [
    {
        type: 'list',
        name: 'add member',
        message: 'Would you like to add another team member?',
        choices: ['add an engineer', 'add an intern', 'finished']
        
    }
];
    

// const getManagerQuestions = () => {
//     inquirer.prompt(
//         [
//          {
//              type: 'input',
//              message: 'What is your/employee\'s office number?',
//              name: 'Manager employee ID' 
//          },
//          {type: 'rawlist',
//     message: 'What is your team manager\'s name?',
//     name: 'Manager name' 
// },
//  ])}


 // function to initialize app
function init() {
    inquirer.prompt(
    [
        ...generalEmployeeQuestions,
        ...optionToAddTeamMember,   
    ]
    ).then((answers) => {
        console.log(answers);
      })
    };

// console.log(questions);

// function writeToFile(fileName, data) { //ppparameters
//     // err catch taken from activity 13 line 15-16
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