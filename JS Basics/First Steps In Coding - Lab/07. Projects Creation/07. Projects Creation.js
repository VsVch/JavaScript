function projectsCreation (input)
{

    let name = input[0];
    let numProjects = Number(input[1]);
    console.log(`The architect ${name} will need ${numProjects*3} hours to complete ${numProjects} project/s.`);
}
projectsCreation(["Geor", "4"]);