const ExpandPrompt = require("inquirer/lib/prompts/expand")

// importing the classes:
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');
const Manager = require('../lib/manager');

// const manager = new Manager(data.managerName, data.managerID, data.managerEmail, data.managerOfficeNum)


function generateHTML(data) {

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="../dist/style.css">
    </head>
<body>
<header>My Team</header>

<div class="card" style="width: 18rem;">
  <div class="card-body">
        <h5 class="card-title">${data.managerName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Manager</h6>
        <div>${data.managerID}</div>
        <a href="#" class="card-link">${data.managerEmail}</a>
        <div>${data.managerOfficeNum}</div>
    </div>
</div>

<div class="card" style="width: 18rem;">
  <div class="card-body">
        <h5 class="card-title">${data.engineerName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>
        <div>${data.engineerID}</div>
        <a href="#" class="card-link">${data.engineerEmail}</a>
        <a href="#" class="card-link">${data.engineerGithubUsername}</a> 
    </div>
</div>

<div class="card" style="width: 18rem;">
    <div class="card-body">
        <h5 class="card-title">${data.internName}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Intern</h6> 
        <div>${data.internID}</div>
        <a href="#" class="card-link">${data.internEmail}</a>
        <div>${data.internSchool}</div>
    </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>    
</body>
</html>`
};
module.exports = generateHTML;