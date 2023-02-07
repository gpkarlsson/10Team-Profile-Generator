const Engineer = require('../lib/Engineer');

test('can set Github account from contstructor', () => {
    const testValue = 'GitHubUser';
    const e = new Engineer('Name', 1, 'email@email.com', testValue);
    expect(e.github).toBe(testValue);
});

test('getRole() should return "Engineer"', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Name', 1, 'email@email.com', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
});

test('Can get GitHub username via getGithub()', () => {
    const testValue = 'Engineer';
    const e = new Engineer('Name', 1, 'email@email.com', 'GitHubUser');
    expect(e.getRole()).toBe(testValue);
});