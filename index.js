const inquirer = require("inquirer");
const generateHTML = require("./html");
const fs = require("fs");

// Creating a set of prompt questions in an array and then will pass that into the .prompt method.
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is your name?",
    default: "John Dick",
  },
  {
    type: "input",
    name: "location",
    message: "Where are you?",
    default: "Cambridge",
  },
  {
    type: "input",
    name: "linkedin",
    message: "What is your linkedin URL?",
    default: "Linkedin",
  },
  {
    type: "input",
    name: "github",
    message: "What is your github url?",
    default: "Github",
  },
];

inquirer
  .prompt(questions)
  .then((answers) => {
    console.log("Thank you for your answers");
    console.log(answers);
    // create the markdown file with the answers, required from the html.js module export
    const results = generateHTML(answers);
    // create the file
    const filename = "index.html";
    // used the fs module writefile to create the file in filesystem
    fs.writeFile(filename, results, (err) =>
      err ? console.log(err) : console.log("file created")
    );
    // store the write file
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log("current environment issue");
    } else {
      console.log("sorry we had a problem");
    }
  });
