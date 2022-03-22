//importing employee:
const Employee = require('./employee');

// Instructor provided classes 
//  using extends and super to get properties from employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.role = 'Engineer';
    }

// getter method:
    getGithub() {
        return this.github;
    }
}

// exporting module
module.exports = Engineer;