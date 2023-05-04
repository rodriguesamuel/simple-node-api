const fs = require('fs');

// json file with the data
var data = fs.readFileSync('projects.json');
var project = fs.readFileSync('project.json');
var phasesJson = fs.readFileSync('phases.json');
var historyLogJson = fs.readFileSync('historyLog.json');
var processJson = fs.readFileSync('processes.json');
var userJson = fs.readFileSync('users.json');
var installationsJson = fs.readFileSync('installations.json');
var projTypesJson = fs.readFileSync('projTypes.json');
var corridorsJson = fs.readFileSync('corridors.json');
var complexesJson = fs.readFileSync('complex.json');

var elements = JSON.parse(data);
var projectData = JSON.parse(project);
var phasesData = JSON.parse(phasesJson);
var historyLogData = JSON.parse(historyLogJson);
var processData = JSON.parse(processJson);
var userData = JSON.parse(userJson);
var instalationsData = JSON.parse(installationsJson);
var projTypesData = JSON.parse(projTypesJson);
var corridorsData = JSON.parse(corridorsJson);
var complexesData = JSON.parse(complexesJson);
const express = require("express");
const app = express();

// To solve the cors issue
const cors = require('cors');

app.listen(3000,
    () => console.log("Server Start at the Port: 3000"));

app.use(express.static('public'));
app.use(cors());


// when get request is made, alldata() is called
app.get('/projects', allProjects);

function allProjects(request, response) {
    // Returns all projects
    response.send(elements);
}

app.get('/project/:id/', getProject);

function getProject(request, response) {
    response.send(projectData);
}

app.get('/phases', allPhases);

function allPhases(request, response) {
    // Returns all phases
    response.send(phasesData);
}

app.get('/project-history/:id/', getHistory);

function getHistory(request, response) {
    // Returns all phases
    response.send(historyLogData);
}

app.get('/processes', getProcess);

function getProcess(request, response) {
    // Returns all phases
    console.log("in getProcess");
    response.send(processData);
}

app.post('/project-save', saveProject);

function saveProject(request, response) {
    // Returns all phases
    response.send(project);
}


app.get('/users', getUsers);

function getUsers(request, response) {
    // Returns all phases
    console.log("in getUsers");

    const delay = 3000;
    setTimeout(function () {
        response.send(userData);
    }, delay);

}

app.get('/installations', getInstallations);

function getInstallations(request, response) {
    // Returns all phases
    console.log("in getInstallations");

    const delay = 3000;
    setTimeout(function () {
        response.send(instalationsData);
    }, delay);

}

app.get('/project-types', getProjTypes);

function getProjTypes(request, response) {
    // Returns all phases
    console.log("in getProjTypes");

    const delay = 3000;
    setTimeout(function () {
        response.send(projTypesData);
    }, delay);

}

app.post('/ripla-save-report', saveRiplaReport);

function saveRiplaReport(request, response) {
    // Returns all phases
    response.status(200).send({message: 'OK'})
}

app.get('/corridors', getCorridors);

function getCorridors(request, response) {
    // Returns all phases
    console.log("in getCorridors");

    const delay = 3000;
    setTimeout(function () {
        response.send(corridorsData);
    }, delay);

}

app.get('/complexes', getComplexes);

function getComplexes(request, response) {
    // Returns all phases
    console.log("in getComplexes");

    const delay = 3000;
    setTimeout(function () {
        response.send(complexesData);
    }, delay);

}
