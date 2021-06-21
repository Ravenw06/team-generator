const Engineer = require("../lib/engineer")
test("create a manager object", ()=>{
    const engineer = new Engineer ("Ray","123321", "rayray123@gmail.com", "ray.github.io")
    expect(engineer.name).toBe("Ray");
    expect(engineer.employeeId).toBe("123321");
    expect(engineer.email).toBe("rayray123@gmail.com");
    expect(engineer.gitHub).toBe("ray.github.io")
})