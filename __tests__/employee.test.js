//importing the class file
const Employee = require('../lib/employee');  

describe('Employee', () => {
    describe('init', () => {
      it('should require a name, id & email', () => {
        const employee = new Employee('Val', 1, 'Valarie@gmail.com');

        expect('name' in employee).toBe(true);
        expect('id' in employee).toBe(true);
        expect('email' in employee).toBe(true);
      });
    });

    describe('getName', () => {
      it('should return the name', () => {
        const employee = new Employee('Val', 1, 'Valarie@gmail.com');
        expect(employee.getName()).toBe('Val');
      });
    });

    describe('getId', () => {
      it('should return id', () => {
        const employee = new Employee('Val', 1, 'Valarie@gmail.com');
        expect(employee.getId()).toBe(1);
      });
    });

    describe('getEmail', () => {
      it('should return email', () => {
        const employee = new Employee('Val', 1, 'Valarie@gmail.com');
        expect(employee.getEmail()).toBe('Valarie@gmail.com');
      });
    });
  });