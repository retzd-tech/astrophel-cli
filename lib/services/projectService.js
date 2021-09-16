const inquirer = require("inquirer");

const { questionFixtures } = require("../fixtures");

const createNewProject = (options) => {
  collectProjectInformation(options);
};

const runProject = (options) => {
  const runProjectPath = `$(npm root -g)/astropheljs/lib/executables/run-project.sh`;
  console.log('Running the project ...');
  const exec = require("child_process").exec,
    child;
  exec(
    `sh ${runProjectPath}`,
    (error, stdout, stderr) => {
      console.log(stdout);
      if (error !== null) {
        console.log(
          "Failed to run the project",
          error
        );
      }
    }
  );
};

const generateStarterFiles = (projectName, starterType) => {
  const shellgeneratorPath = `$(npm root -g)/astropheljs/lib/executables/generate-project-files.sh`;
  console.log(`Generating ${projectName} files`);
  const exec = require("child_process").exec,
    child;
  exec(
    `projectName=${projectName} starterType=${starterType} sh ${shellgeneratorPath}`,
    (error, stdout, stderr) => {
      console.log(stdout);
      if (error !== null) {
        console.log(
          "Failed generating the starter project files, please contact retzd.tech@gmail.com",
          error
        );
      }
    }
  );
};

const collectProjectInformation = () => {
  inquirer
    .prompt(questionFixtures.createProjectQuestions)
    .then((projectInformation) => {
      console.log("Creating your project");
      console.log("----------------------");
      const { projectName, starterType } = projectInformation;
      generateStarterFiles(projectName, starterType);
    });
};

module.exports = {
  createNewProject,
};
