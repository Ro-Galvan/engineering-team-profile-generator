
//importing employee:
const Employee = require('./employee');

// Instructor provided classes 
//  using extends and super to get properties from employee
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.role = 'Manager';
    }
    
}

// exporting module
module.exports = Manager;