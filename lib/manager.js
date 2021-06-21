const Employee = require("./employee")

class Manager extends Employee{
    constructor(name, employeeId, email, office){
        super(name, employeeId,email)
        this.office = office;
    }
    getOffice(){
        return this.office
    }
    getRole(){
        return "Manager"
    }
}

module.exports = Manager;