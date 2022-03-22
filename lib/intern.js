//importing employee:
const Employee = require('./employee');

// Instructor provided classes 
//  using extends and super to get properties from employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.role = 'Intern';
    }

// getter method:
getSchool() {
    return this.school;
}

}

// exporting module
module.exports = Intern;