const { stringUtils } = require('../utils');

const validateProjectName = (input) => {
    const isContainSpace = stringUtils.containsSpace(input);
    const isContainSymbol = stringUtils.containSymbol(input);
    if (isContainSpace || isContainSymbol) {
        return 'Please put a project name without space and any symbol'
    }
    return true;
}

const createProjectQuestions = [
    {
        type: 'input',
        name: 'projectName',
        message: 'Project name',
        default: 'astrophel-project',
        validate: validateProjectName
    },
    {
        type: 'list',
        name: 'starterProject',
        message: 'Select starter template',
        default: 'emptyProject',
        choices: [
            { name: 'Empty project' },
            { name: 'Slide presentation' },
            { name: 'First person game' },
            { name: 'VR sea diver' },
            { name: 'AR simple mark' }
        ]
    },
];

module.exports = {
    createProjectQuestions
}