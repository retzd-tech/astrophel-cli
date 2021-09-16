#!/usr/bin/env node

const program = require('commander');

const { createNewProject } = require('../lib/services/projectService');

program
    .command('create')
    .option('-n, --name <project-name>', 'Name of the project', 'astrophel-project')
    .description('Create new astrophel project')
    .action((options) => {
        createNewProject(options);
    });

program
    .command('start')
    .description('Run astrophel project')
    .action((options) => {
        createNewProject(options);
    });

program.parse(process.argv);