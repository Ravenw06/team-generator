const CreateEmployee = require("./employee")

class Manager extends CreateEmployee{
    constructor(name, employeeId, email, office, role){
        super(name, employeeId,role,email)
        this.office = office;
    }
}

module.exports = Manager;