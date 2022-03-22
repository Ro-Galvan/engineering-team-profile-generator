// const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('init', () => {
      it('should require a Github usernam', () => {
        const engineer = new Engineer('Randy', 1, 'r@email.com', 'githubusername');

        expect('github' in engineer).toBe(true);
        expect('id' in engineer).toBe(true);
        expect('email' in engineer).toBe(true);
      });
    });
    describe('getName', () => {
      it('should return the name of the name…', () => {
        const engineer = new Engineer('Randy', 1, 'r@email.com');
        expect(engineer.getName()).toBe('Randy');
  
      });
    });
    describe('getID', () => {
      it('should return the id', () => {
        const engineer = new Engineer('Randy', 1, 'r@email.com');
        expect(engineer.getId()).toBe(1);
      });
    });
    describe('getRole', () => {
      it('should return the role', () => {
        const engineer = new Engineer('Randy', 1, 'r@email.com');
        expect(engineer.getRole()).toBe('Engineer');
      });
    });
    describe('getEmail', () => {
      it('should return the email', () => {
        const engineer = new Engineer('Randy', 1, 'r@email.com');
        expect(engineer.getEmail()).toBe('r@email.com');
      });
    });
  });