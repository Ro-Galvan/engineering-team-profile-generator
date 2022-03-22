const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('init', () => {
      it('should require school name', () => {
        const intern = new Intern('Val', 1, 'Valarie@gmail.com', 'MIT');

        expect('school' in intern).toBe(true);
      });
    });
    // method:
    describe('getSchool', () => {
      it('should return school name', () => {
        const intern = new Intern('Val', 1, 'Valarie@gmail.com', 'MIT');
        expect(intern.getSchool()).toBe('MIT');
  
      });
    });
    });
  
   