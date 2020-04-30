function generateMarkdown(data) {
  return `

### :dart: Project Title:
${data.project} 
### :pencil2: Description
${data.description} 
### :books: Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

### <a name="installation"></a> :computer: Installation

To install necessary dependencies, run the following command:
${data.command}


### <a name="usage"></a> :floppy_disk: Usage
${data.usage} 

### <a name="license"></a> :book: License
License used : ![license](https://img.shields.io/badge/license-${data.license}-GREEN)

### <a name="contributing"></a> :handshake: Contributing
 ${data.contribute} 

### <a name="tests"></a> Tests
${data.test} 

  
### Author:
:smile: Name: ${data.author} [![githubfollower](https://img.shields.io/github/followers/${data.username}?style=social)](https://github.com/tongtongding?tab=followers)
:e-mail: Email: ${data.email}

  <img src="${data.picture}" alt="avatar">

### <a name="questions"></a> :poultry_leg: Questions 

  If you have any questions about the repo, feel free to contact ${data.author}
  



`;
}

module.exports = generateMarkdown;
