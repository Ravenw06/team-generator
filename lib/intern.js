const CreateEmployee = require("./employee")

class Intern extends CreateEmployee {
    constructor(name, employeeId, email, school, role){
        super(name, employeeId,role,email)
        this.school = school;
    }
}


module.exports = Intern