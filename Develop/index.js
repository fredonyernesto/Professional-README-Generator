// TODO: Include packages needed for this application
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'Motivation',
        message: 'What was your motivation?'
    },
    {
        type: 'input',
        name: 'Build',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'Problem',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'Lesson',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'Stand Out',
        message: 'What makes your project stand out?'
    },
    {
        type: 'input',
        name: 'Table of Contents (Optional)',
        message: 'If your README is long, add a table of contents?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps required to install your project'
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
