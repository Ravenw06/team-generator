const Intern = require("../lib/intern")
test("create a manager object", ()=>{
    const intern = new Intern ("Ray","123321", "rayray123@gmail.com", "uot")
    expect(intern.name).toBe("Ray");
    expect(intern.employeeId).toBe("123321");
    expect(intern.email).toContain("@");
    expect(intern.school).toBe("uot")
})