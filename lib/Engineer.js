const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    returnEmail() {
        return this.email;
    }

    returnRole() {
        return "Engineer";
    }
}

module.exports - Engineer;