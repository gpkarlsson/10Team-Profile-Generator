const Employee = require('../lib/Employee');

test('Can instantiate new employee instance', () => {
  const e = new Employee();
  expect(typeof (e)).toBe('object');
});