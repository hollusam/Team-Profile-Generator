// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.

// importing Employee constructor
const Employee = require("./Employee");

// Manager constructor as an extension of employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling the employee constructor
        super (name, id, email);

        this.officeNumber = officeNumber;
    }

    getOfficeNumber () {
        return this.officeNumber; 
    }

    // overriding employee role 
    getRole () {
        return "Manager";
    }
}

//Exporting Manager constructor
module.exports = Manager;