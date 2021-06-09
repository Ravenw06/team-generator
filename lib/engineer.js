const CreateEmployee = require("./employee")

class Engineer extends CreateEmployee {
    constructor(name, employeeId, email, gitHub, role){
        super(name, employeeId,role,email)
        this.gitHub = gitHub;
    }
}

module.exports = Engineer