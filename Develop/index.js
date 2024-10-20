// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Title?"
    },
    {
        type: 'input',
        name: 'description',
        message: "Description?"
    },
    {
        type: 'input',
        name: 'contents',
        message: "Contents?"
    },
    {
        type: 'input',
        name: 'installation',
        message: "Installation?"
    },
    {
        type: 'input',
        name: 'uage',
        message: "Usage?"
    },
    {
        type: 'input',
        name: 'license',
        message: "License?"
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Contributing?"
    },
    {
        type: 'input',
        name: 'tests',
        message: "Tests?"
    },
    {
        type: 'input',
        name: 'questions',
        message: "Questions?"
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.appendFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.createPromptModule()(questions).then(function (answer) {
        for(const key in answer){
            let fileName = answer.title;
            if(key === 'title'){
                writeToFile(`${fileName}.md`, `
# ${key} 
${answer[key]}
                `);
            }else{
                writeToFile(`${fileName}.md`, `
## ${key}
${answer[key]}
                `);
            }
        }
    });
}

// Function call to initialize app
init();
