// Instructor helped provide Classes:

class Employee {
    // properties:
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //methods:
getName() {
    return this.name;
}
getId() {
    return this.id;
}
getEmail() {
    return this.email;
}
getRole() {
    return this.role;
}

}
// exporting module
module.exports = Employee;