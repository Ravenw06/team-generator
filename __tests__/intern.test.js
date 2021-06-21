const Intern = require("../lib/intern")
test("create a manager object", ()=>{
    const intern = new Intern ("Ray","123321", "rayray123@gmail.com", "ray.github.io")
    expect(intern.name).toBe("Ray");
    expect(intern.employeeId).toBe("123321");
    expect(intern.email).toBe("rayray123@gmail.com");
    expect(intern.gitHub).toBe("ray.github.io")
})