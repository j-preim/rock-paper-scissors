const inquirer = require('inquirer');
const fs = require("fs");

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'username',
    },
    {
      type: 'input',
      message: 'What is your location?',
      name: 'location',
    },
    {
      type: 'input',
      message: 'Give a brief bio about yourself',
      name: 'bio',
    },
    {
      type: 'input',
      message: 'What is your LinkedIn URL?',
      name: 'linkedIn',
    },
    {
      type: 'input',
      message: 'What is your GitHub URL?',
      name: 'gitHub',
    },
    {
      type: 'checkbox',
      message: 'What programming languages do you know?',
      choices: [
        {name: "html", value: "html"},
        {name: "javascript", value: "javascript"},
        {name: "python", value: "python"},
        {name: "c++", value: "c++"},
      ],
      name: 'languages',
    },
  ])

  .then((response) =>

fs.writeFile("index.html", 
`
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css" />
  <title>Portfolio Generator</title>
</head>
<body>
  <header>${response.username}'s Portfolio</header>
  <main>
    <p>Name: ${response.username}</p>
    <p>Location: ${response.location}</p>
    <p>Bio: ${response.bio}</p>
    <p>LinkedIn:<a href="${response.linkedIn}">LinkedIn</a></p>
    <p>GitHub:<a href = "${response.gitHub}">GitHub</a></p>
    <p>Languages:
      <ul>
        ${languagesLoop(response.languages)}
      </ul>
    </p>
  </main>
</body>
</html>
`
, (err) =>
    err ? console.error(err) : console.log(response.languages)
  )
  )


function languagesLoop(languages) {
  let listItems = "";
  for (let i = 0; i < languages.length; i++) {
    listItems = listItems + "<li>" + languages[i] + "</li>";
  }
  return listItems
}