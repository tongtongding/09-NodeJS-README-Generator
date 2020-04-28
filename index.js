const fs= require('fs');
const inquirer = require('inquirer');
const axios = require('axios');
const generateMarkdown = require('./utils/generateMarkdown');

inquirer
.prompt([
    {
    type:"input",
    message: "What is your Github username?",
    name: "username"
},
{
    type:"input",
    message:"What is your project name?",
    name:"project"
},
{ 
    type:"input",
    message:"Please write a short description about your project",
    name:"description",
},
{ 
    type:"list",
    message:"What kind of license your project have?",
    name:"license",
    choices: [
        "MIT",
        "APACHE 2.0",
        "GPL 3.0",
        "None"
      ]
},
{ 
    type:"input",
    message:"What command should be run to install dependencies?",
    name:"command",
    default:"npm i"
},
{ 
    type:"input",
    message:"How do you use your repo?",
    name:"usage",
},
{ 
    type:"input",
    message:"What command should be run to run test?",
    name:"test",
    default:"npm test"
},
{ 
    type:"input",
    message:"What do people do to contribute to repo",
    name:"contribute",
},

])
.then((res)=>{
    // console.log(res);
    
    const gitGubURL = `https://api.github.com/users/${res.username}`
    axios
    .get(gitGubURL)
    .then((response)=>{
        // console.log(response)
        res.email = response.data.email;
        res.picture = response.data.avatar_url;
        // console.log(res)
        const info = generateMarkdown(res);
        fs.writeFile("README.md",info,(err)=>{
            if(err){
                return console.log(err);
        }
        console.log("success")
        });

    })


})
.catch((err)=>{
    console.log(err)
});