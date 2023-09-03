const inquirer = require('inquirer');
const fs = require('fs');

const { generateSvg } = require('./lib/generateSvg');
const { makeShape } = require('./lib/makeShape');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'logoName',
            message: 'Please enter text, must not be more than 3 characters',
        },
        {
            type: 'input',
            name: 'textColour',
            message: 'Please enter text colour keyword or a hexadecimal number for logos test colour',
        },
        {
            type: 'input',
            name: 'logoColour',
            message: 'Please enter text colour keyword or a hexadecimal number for background test colour',
        },
        {
            type: 'list',
            name: 'logoShape',
            message: 'Please choose logo shape',
            choices: ['triangle', 'circle', 'square'],
        },
    ])
    .then((data) => {
        const svgPath = './dist/logo.svg';
        const finalLogo = makeShape(data);

        fs.writeFile(svgPath, generateSvg(finalLogo), (err) =>
            err ? console.error(err) : console.log('Generated logo.svg')
        );
    })
    .catch((err) => console.error(err));