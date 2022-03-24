const ExpandPrompt = require("inquirer/lib/prompts/expand")

// importing the classes:
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

const htmlBody = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>

    <h1> ${data.manager name}</h1>
    <div>${data.ENTER EMPLOYEE TYPE}</div>
    <div>${data.manager ID}</div>
    <div>${data.manager email}</div>
    <div>${data.manager officeNum}</div>


    <h1> ${data.engineer name}</h1>
    <div>${data.ENTER EMPLOYEE TYPE}</div>
    <div>${data.engineer ID}</div>
    <div>${data.engineer email}</div>
    <div>${data.engineer engineer github username}</div>


    <h1> ${data.intern name}</h1>
    <div>${data.ENTER EMPLOYEE TYPE}</div>
    <div>${data.intern ID}</div>
    <div>${data.intern email}</div>
    <div>${data.intern school}</div>
    
</body>
</html>`

module.exports = HtmlBody;