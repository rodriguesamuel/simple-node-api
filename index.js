var fs = require('fs');

// json file with the data
var data = fs.readFileSync('projects.json');
var project = fs.readFileSync('project.json');
var phasesJson = fs.readFileSync('phases.json');
var historyLogJson = fs.readFileSync('historyLog.json');

var elements = JSON.parse(data);
var projectData = JSON.parse(project);
var phasesData = JSON.parse(phasesJson);
var historyLogData = JSON.parse(historyLogJson);
const express = require("express");
const app = express();

// To solve the cors issue
const cors = require('cors');

app.listen(3000,
    () => console.log("Server Start at the Port"));

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

