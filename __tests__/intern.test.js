// const Intern = require('../lib/intern');

describe('Intern', () => {
    describe('init', () => {
      it('should require a name, id and email…', () => {
        const intern = new Intern('Randy', 1, 'r@email.com');

        expect('name' in intern).toBe(true);
        expect('id' in intern).toBe(true);
        expect('email' in intern).toBe(true);
      });
    });
    describe('getName', () => {
      it('should return the name of the name…', () => {
        const intern = new Intern('Randy', 1, 'r@email.com');
        expect(intern.getName()).toBe('Randy');
  
      });
    });
    describe('getID', () => {
      it('should return the id', () => {
        const intern = new Intern('Randy', 1, 'r@email.com');
        expect(intern.getId()).toBe(1);
      });
    });
    describe('getRole', () => {
      it('should return the role', () => {
        const intern = new Intern('Randy', 1, 'r@email.com');
        expect(intern.getRole()).toBe('Intern');
      });
    });
    describe('getEmail', () => {
      it('should return the email', () => {
        const intern = new Intern('Randy', 1, 'r@email.com');
        expect(intern.getEmail()).toBe('r@email.com');
      });
    });
  });