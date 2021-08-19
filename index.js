const nosyReporter = require("inquirer");
const fileSystem = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { assert } = require("console");

const questions = [
  "Project name: ",
  "Enter project description: ",
  "Enter installation instructions: ",
  "Describe the project's usage: ",
  "How can one contribute to this project? ",
  "Specify any tests (leave blank if none): ",
  "Frequently asked Questions: ",
  "Select a license",
];
const varNames = [
  "projectName",
  "description",
  "installation",
  "usage",
  "contributing",
  "tests",
  "faq",
  "license",
];

const licenses = ["Apache", "MIT", "BSD3", "BSD2", "GPL3", "GPL2"];

function getQuestionArray() {
  const ret = [];
  questions.map((elem, index) => {
    const frag = {
      message: elem,
      name: varNames[index],
    };
    if (index == varNames.length - 1) {
      frag["type"] = "list";
      frag["choices"] = licenses.slice();
    } else frag["type"] = "input";
    ret.push(frag);
  });

  return ret;
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fileSystem.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) => {
    if (err) console.error(err);
    else console.log(`${fileName} saved successfully`);
  });
}

// TODO: Create a function to initialize app
function init() {
  for (license of licenses)
    assert(generateMarkdown.renderLicenseBadge(license) != "");
  nosyReporter
    .prompt(getQuestionArray())
    .then((res) => {
      console.log(res);
      writeToFile("README.md", res);
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
