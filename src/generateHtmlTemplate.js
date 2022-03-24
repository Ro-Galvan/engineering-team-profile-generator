const ExpandPrompt = require("inquirer/lib/prompts/expand")

// importing the classes:
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

function generateHTML(data) {
return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<section></section>
    <h1> ${data.managerName}</h1>
    <div>${data.ENTEREMPLOYEETYPE}</div>
    <div>${data.managerID}</div>
    <div>${data.managerEmail}</div>
    <div>${data.managerOfficeNum}</div>

<section></section>
    <h1> ${data.engineerName}</h1>
    <div>${data.ENTEREMPLOYEETYPE}</div>
    <div>${data.engineerID}</div>
    <div>${data.engineerEmail}</div>
    <div>${data.engineerGithubUsername}</div>

<section></section>
    <h1> ${data.internName}</h1>
    <div>${data.ENTEREMPLOYEETYPE}</div>
    <div>${data.internID}</div>
    <div>${data.internEmail}</div>
    <div>${data.internSchool}</div>
    
</body>
</html>`
};
module.exports = generateHTML;