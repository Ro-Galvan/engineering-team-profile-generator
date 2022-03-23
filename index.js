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

const generalQuestions = [
    {
        type: 'input',
        message: 'What is your/employee\'s name?',
        name: 'Name' // The name property is a must since it is used in the storing of answers
    },
    {
        type: 'input',
        message: 'What is your/employee\'s ID?',
        name: 'ID' 
    },
    {
        type: 'input',
        message: 'What is your/employee\'s email address?',
        name: 'Email' 
    },
    {
        type: 'input',
        message: 'What is your team manager\'s office number?',
        name: 'Manager employee ID' 
    },
    {
        type: 'rawlist',
        message: 'What is your team manager\'s office number?',
        name: 'Manager employee ID' 
    },
    
    //     },
];
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
function init() {
   inquirer.prompt(generalQuestions)

}
  //calling/passing the questions object from above--.using the prompt method from inquirer (object) module that I imported at the top 
//    .then(function (responses){          //after ?'s are asked .then returns promise and gives data (aka the answers) and then
//        writeToFile('./dist/README.md', generateMarkdown(responses));  //-calling writeToFile function and passing arguments: 1. fileName is now path of where to create the file 2. data is now pulling template literal from generateMarkdown file which contains answers to questions
//        // console.log(responses.title)
//        // return questions;
//    })};
// // )}

// Function call to initialize app
init();