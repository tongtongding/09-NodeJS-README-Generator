function generateMarkdown(data) {
  return `

  
  ## ${data.username} 
  ## ${data.project} 
  ## ${data.description} 
  ## License used : ${data.license}
  


`;
}

module.exports = generateMarkdown;
