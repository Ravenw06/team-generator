const Manager = require("../lib/manager")
test("create a manager object", ()=>{
    const manager = new Manager ("Ray","123321", "rayray123@gmail.com", "AD1224")
    expect(manager.name).toBe("Ray");
    expect(manager.employeeId).toBe("123321");
    expect(manager.email).toBe("rayray123@gmail.com");
    expect(manager.office).toBe("AD1224")
})