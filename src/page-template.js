

// function createTeam(){
//     var teamProfilesString ="";
//     teamProfiles.forEach(member =>{
//         if(member.getRole() == "Manager"){
//             teamProfilesString +=
//             `
//             <div class="card border-primary mb-3" style="max-width: 18rem;">
//             <div class="card-header">${member.getRole()}</div>
//             <div class="card-body text-primary">
//             <h5 class="card-title">${member.name}</h5>
//             <h5 class="card-title">${member.email}</h5>
//             <h5 class="card-title">${member.employeeId}</h5>
//             <p class="card-text">${member.office}</p>
//             </div>
//             </div>`
//         }
//         else if (member.getRole() == "Intern"){
//             teamProfilesString +=
//             `
//             <div class="card border-primary mb-3" style="max-width: 18rem;">
//             <div class="card-header">${member.getRole()}</div>
//             <div class="card-body text-primary">
//             <h5 class="card-title">${member.name}</h5>
//             <h5 class="card-title">${member.email}</h5>
//             <h5 class="card-title">${member.employeeId}</h5>
//             <p class="card-text">${member.school}</p>
//             </div>
//             </div>
//             `
//         }
//         else if (member.getRole() == "Engineer"){
//                 teamProfilesString +=
//                 `
//                 <div class="card border-primary mb-3" style="max-width: 18rem;">
//                 <div class="card-header">${member.getRole()}</div>
//                 <div class="card-body text-primary">
//                 <h5 class="card-title">${member.name}</h5>
//                 <h5 class="card-title">${member.email}</h5>
//                 <h5 class="card-title">${member.employeeId}</h5>
//                 <p class="card-text">${member.gitHub}</p>
//                 </div>
//                 </div>
//                 `
//         }
//     })
//     var html = `<!DOCTYPE html>
//     <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
//     <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-gtEjrD/SeCtmISkJkNUaaKMoLD0//ElJ19smozuHV6z3Iehds+3Ulb9Bn9Plx0x4" crossorigin="anonymous"></script>
//     <title>Team Profiles</title>
//     </head>
//     <body>
//     <div class="row">`
//     + teamProfilesString +
//     `</div>
//     </body>
//     </html>
//     `
//     return html
// };

// module.exports = createTeam  