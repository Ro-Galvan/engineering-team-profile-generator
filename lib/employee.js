
// The first class is an Employee parent class with the following properties and methods:

// name 

// id

// email

// getName()

// getId()

// getEmail()

// getRole()—returns 'Employee'

// The other three classes will extend Employee.

class Employee {
    constructor(name) {
        this.name = name;
    }
MethodGoesHere () {
    console.log("method name goes here")
    }
}

const employee = new Employee ('employee name goes here');





// exporting module
module.exports = Employee;