#!/usr/bin/env node

const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');

const repoUrl = 'https://github.com/json-dom/react-json.git';
const destinationPath = process.cwd() + '/react-json-starter';  

console.log('Cloning repository...');

simpleGit()
  .clone(repoUrl, destinationPath)
  .then(() => {
    console.log(`Repository cloned to ${destinationPath}`);
    console.log('Installing dependencies...');

    process.chdir(destinationPath);

    const exec = require('child_process').exec;
    exec('npm install', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
      console.log('Setup complete!');
	  console.log('To run the project:');
	  console.log('cd react-json-starter && npm run start');
	  console.log('You can find the entry file at /src/App.js');
	  console.log('Happy Hacking!');
    });
  })
  .catch((err) => {
    console.error('Error cloning the repository:', err);
  });
