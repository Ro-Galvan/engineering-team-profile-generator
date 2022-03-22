// exporting module
module.exports = Engineer;
// const Employee = require('./employee') //need to import employee

function Engineer(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = 'Engineer';
}

Engineer.prototype.getRole = function () {
    return this.role;
}
Engineer.prototype.getRole = function () {
    return this.role;
}
Engineer.prototype.getRole = function () {
    return this.role;
}
Engineer.prototype.getRole = function () {
    return this.role;
}