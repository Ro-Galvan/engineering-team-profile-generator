const Manager = require('../lib/manager');

describe('Manager', () => {
    describe('init', () => {
      it('should require officeNumber', () => {
        const manager = new Manager('Val', 1, 'Valarie@gmail.com', 500);

        expect('officeNumber' in manager).toBe(true);
      });
    });
    });
  