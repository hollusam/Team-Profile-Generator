// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Importing Employee class
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor (name, id, email, github) {
        // call for employee constructor
        super (name, id, email);

        this.github = github;
    }

    // getting github from input
    getGithub () {
        return this.github;
    }

    //employee role overridden
    getRole () {
        return "Engineer";
    }
}

// Exporting engineer constructor
module.exports = Engineer;