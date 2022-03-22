// create all 4 classes
// export & import files accordingly --DONE
// psudeo code:
    // employee
    // engineer
    // intern
    // manager

// create html
// using bootstrap style the cards


    // importing the package/module: inquirer
const inquirer = require('inquirer');

    // importing the package/module: fs -file system
const fs = require('fs');

//importing the generate html template file
const HtmlBody = require('./src/generateHtmlTemplate');  


const questions = [
    {
        type: 'input',
        message: 'What is your team manager\'s name?',
        name: 'Manager Name' // The name property is a must since it is used in the storing of answers
    },
    {
        type: 'input',
        message: 'What is your team manager\'s employee ID?',
        name: 'Manager employee ID' // The name property is a must since it is used in the storing of answers
    },
    {
        type: 'input',
        message: 'What is your team manager\'s email address?',
        name: 'Manager employee ID' // The name property is a must since it is used in the storing of answers
    },
    {
        type: 'input',
        message: 'What is your team manager\'s office number?',
        name: 'Manager employee ID' // The name property is a must since it is used in the storing of answers
    },
    {
        type: 'rawlist',
        message: 'What is your team manager\'s office number?',
        name: 'Manager employee ID' // The name property is a must since it is used in the storing of answers
    },


    },
];

// function writeToFile(fileName, data) { //ppparameters
//     // err catch taken from activity 13 line 15-16
//    fs.writeFile(fileName, data, (err) => {
//        err ? console.error(err) : console.log('Success!');  //is this the promise?
//                // fs.writeFile('./dist/README.md', data, (err) => {
//                    // console.log(fileName);
//                    // console.log(data);
// });
// }
   
// // TODO: Create a function to initialize app
// function init() {
//    inquirer.prompt(questions) //calling/passing the questions object from above--.using the prompt method from inquirer (object) module that I imported at the top 
//    .then(function (responses){          //after ?'s are asked .then returns promise and gives data (aka the answers) and then
//        writeToFile('./dist/README.md', generateMarkdown(responses));  //-calling writeToFile function and passing arguments: 1. fileName is now path of where to create the file 2. data is now pulling template literal from generateMarkdown file which contains answers to questions
//        // console.log(responses.title)
//        // return questions;
//    })};
// // )}

// // Function call to initialize app
// init();