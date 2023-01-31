// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

// importing Employee class
const Employee = require("./Employee");

// intern contructor as an extension of employee constructor
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email);

        this.school = school;
    }

    // returning school
    getSchool () {
        return this.school;
    }

    // employee role overridden by intern
    getRole () {
        return "Intern";
    }
}

// Exporting intern constructor
module.exports = Intern;