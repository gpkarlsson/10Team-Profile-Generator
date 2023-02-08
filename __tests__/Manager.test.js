const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');

test('Can set office number from constructor argument', () => {
  const testValue = 100;
  const e = new Manager('Name', 1, 'email@email.com', 100);
  expect(e.getRole()).toBe(testValue);
});

test('Can get office number from getOffice()', () => {
  const testValue = 100;
  const e = new Manager('Name', 1, 'email@email.com', testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
})