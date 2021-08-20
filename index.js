const nosyReporter = require("inquirer");
const fileSystem = require("fs");
const markdownUtils = require("./utils/generateMarkdown");
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
  "title",
  "description",
  "installation",
  "usage",
  "contributing",
  "tests",
  "questions",
  "license",
];

const licenses = ["Apache", "MIT", "BSD3", "BSD2", "GPL3", "GPL2"];

function getQuestionArray() {
  const ret = [];
  // Adds standard stuff to each element
  questions.map((elem, index) => {
    const frag = {
      message: elem,
      name: varNames[index],
    };

    // Specify name of variables that need specialized input
    switch (varNames[index]) {
      case "license":
        frag["type"] = "list";
        frag["choices"] = licenses.slice();
        break;
    }
    if (varNames[index] === "license") {
    } else frag["type"] = "input";
    ret.push(frag);
  });

  return ret;
}

function writeToFile(fileName, data) {
  fileSystem.writeFile(fileName, data, (err) => {
    if (err) console.error(err);
    else console.log(`${fileName} saved successfully`);
  });
}

function tests() {
  for (license of licenses) {
    assert(
      markdownUtils.renderLicenseBadge(license) != "",
      `License: ${license} is not defined in generateMarkdown`
    );
  }
}

function init() {
  tests();
  nosyReporter
    .prompt(getQuestionArray())
    .then((res) => {
      // console.log(markdownUtils.generateMarkdown(res));
      writeToFile("README.md", markdownUtils.generateMarkdown(res));
    })
    .catch((err) => {
      console.error(err);
    });
}

// Function call to initialize app
init();
