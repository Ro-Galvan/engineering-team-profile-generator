const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    describe('init', () => {
      it('should require a github username', () => {
        const engineer = new Engineer('Val', 1, 'Valarie@gmail.com', 'githubusername');

        expect('github' in engineer).toBe(true);
      });
    });
    // method:
    describe('getGithub', () => {
      it('should return a github username', () => {
        const engineer = new Engineer('Val', 1, 'Valarie@gmail.com', 'githubusername');
        expect(engineer.getGithub()).toBe('githubusername');
      });
    });
  });