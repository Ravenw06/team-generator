const Employee = require("../lib/employee")
test("create a employee object", ()=>{
    const employee = new Employee ("Ray","123321", "rayray123@gmail.com")
    expect(employee.name).toBe("Ray");
    expect(employee.employeeId).toBe("123321");
    expect(employee.email).toBe("rayray123@gmail.com");
})