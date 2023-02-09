//Require Employee class
const Employee = require('./Employee');

//Create Manager subclass with functions to return data
class Manager extends Employee {
    constructor(name, id, email, managerOfficeNum) {
        super(name, id, email);
        this.managerOfficeNum = managerOfficeNum;
    }

    returnRole() {
        return "Manager";
    }

    returnManagerOfficeNum() {
        return this.managerOfficeNum;
    }
}

module.exports = Manager;
