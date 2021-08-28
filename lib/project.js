const colors = require('colors');
const inquirer = require('inquirer');

const { questionFixtures } = require('./fixtures');

const createNewProject = (options) => {
    collectProjectInformation(options);
}

const generateStarterFiles = () => {
    var exec = require('child_process').exec, child;
    exec('ls',
    function (error, stdout, stderr) {
        console.log(stdout);
        if (error !== null) {
             console.log('Failed generating the starter project files, please contact retzd.tech@gmail.com: ');
        }
    });
}

const collectProjectInformation = () => {
    inquirer
    .prompt(questionFixtures.createProjectQuestions)
    .then(function (answers) {
        console.log('Creating your project');
        console.log('----------------------');
        console.log('Your project has been created');
        generateStarterFiles();
    });
}

module.exports = {
    createNewProject
}