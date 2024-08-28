// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description explaining the project.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license.',
        choices: ['GNU AGPLv3', 'GNU FDLv1.3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project'
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'If you created an application or package and would like other developers to contribute it, you can include guidlines for how to do so.'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run them here.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((responses) =>{
        const markdown = generateMarkdown(responses);
        writeToFile('README.md', markdown);
    })
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.error(err))
}

// Function call to initialize app
init();
