const colors = require('colors');
const inquirer = require('inquirer');
const pad = require('pad');

const { types } = require('./values');
const values = require('../lib/values');
const { stringUtils } = require('./utils');

const validateProjectName = (input) => {
    const isContainSpace = stringUtils.containsSpace(input);
    const isContainSymbol = stringUtils.containSymbol(input);
    if (isContainSpace || isContainSymbol) {
        return 'Please put a project name without space and any symbol'
    }
    return true;
}

const createNewProject = (options) => {
    collectProjectInformation(options);
}

const questions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Project name',
        default: 'astrophel-project',
        validate: validateProjectName
    },
];

const collectProjectInformation = () => {
    inquirer
    .prompt(questions)
    .then(function (answers) {
        console.log('Creating your project');
        console.log('------------------');        
    });
}

module.exports = {
    createNewProject
}