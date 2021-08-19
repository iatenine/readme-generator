const nosyReporter = require("inquirer");
const fileSystem = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  "Project name: ",
  "Enter project description: ",
  "Enter installation instructions: ",
  "Describe the project's usage: ",
  "How can one contribute to this project? ",
  "Specify any tests (leave blank if none): ",
  "Frequently asked Questions: ",
];
const varNames = [
  "projectName",
  "description",
  "installation",
  "usage",
  "contributing",
  "tests",
  "faq",
];

function getQuestionArray() {
  const ret = [];
  questions.map((elem, index) => {
    const frag = {
      message: elem,
      name: varNames[index],
    };
    if (index == varNames.length - 1) {
      frag["type"] = "list";
      frag["choices"] = [3, 4, 6];
    } else frag["type"] = "input";
    ret.push(frag);
  });

  return ret;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  nosyReporter
    .prompt(getQuestionArray())
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
  getQuestionArray();
}

// Function call to initialize app
init();
