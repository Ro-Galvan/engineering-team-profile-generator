const Employee = require('../lib/employee');  //importing the class file

// // template of test:
// describe("Toy", () => {
//     describe("init", () => {
//       it('should…', () => {
  
//         expect(child.name).toEqual("Sarah");  //might have to use toBe
//       });
//     });

//     describe("purchase", () => {
//       it('should…', () => {
  
//       });
//     });
//   });

describe('Employee', () => {
    describe('init', () => {
      it('should require a name, id and email…', () => {
        const employee = new Employee('Randy', 1, 'r@email.com');

        expect('name' in employee).toBe(true);
        expect('id' in employee).toBe(true);
        expect('email' in employee).toBe(true);
      });
    });
    describe('getName', () => {
      it('should return the name of the name…', () => {
        const employee = new Employee('Randy', 1, 'r@email.com');
        expect(employee.getName()).toBe('Randy');
  
      });
    });
    describe('getID', () => {
      it('should return the id', () => {
        const employee = new Employee('Randy', 1, 'r@email.com');
        expect(employee.getId()).toBe(1);
      });
    });
    describe('getEmail', () => {
      it('should return the email', () => {
        const employee = new Employee('Randy', 1, 'r@email.com');
        expect(employee.getEmail()).toBe('r@email.com');
      });
    });
  });