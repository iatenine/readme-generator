const licenses = [];
const { assert } = require("console");

function OpenSourceLicense(shortName, name, badge, link) {
  this.shortName = shortName;
  this.name = name;
  this.badge = `[![License](https://img.shields.io/badge/License-${badge})](${link})`;
  this.link = link;
  licenses.push(this);
}

new OpenSourceLicense(
  "Apache",
  "Apache 2.0 License",
  "Apache%202.0-blue.svg",
  "https://opensource.org/licenses/Apache-2.0"
);
new OpenSourceLicense(
  "BSD3",
  "BSD 3-Clause License",
  "BSD%203--Clause-blue.svg",
  "https://opensource.org/licenses/BSD-3-Clause"
);
new OpenSourceLicense(
  "BSD2",
  "BSD 2-Clause License",
  "BSD%202--Clause-orange.svg",
  "https://opensource.org/licenses/BSD-2-Clause"
);
const MIT = new OpenSourceLicense(
  "MIT",
  "The MIT License",
  "MIT-yellow.svg",
  "https://opensource.org/licenses/MIT"
);
const GPL3 = new OpenSourceLicense(
  "GPL3",
  "GNU GPL v3",
  "GPLv3-blue.svg",
  "https://www.gnu.org/licenses/gpl-3.0"
);
const GPL2 = new OpenSourceLicense(
  "GPL2",
  "GNU GPL v2",
  "GPL%20v2-blue.svg",
  "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html"
);

assert(licenses.length === 6, "license array is not expected length");

function renderLicenseBadge(license) {
  for (entry of licenses) if (entry.shortName === license) return entry.badge;
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  for (entry of licenses) if (entry.shortName === license) return entry.link;
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == "") return "";
  let licenseObj;
  for (entry of licenses) {
    if (entry.shortName === license) {
      licenseObj = entry;
      break;
    }
  }
  if (licenseObj == undefined) return "";
  return `# License
  This project is covered under [${licenseObj.name}](${renderLicenseLink(
    license
  )})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}

# Table of Contents
[Description](#description)  
[Installation](#installation)  
[Usage](#usage)  
[Contributing](#contributing)  
[Tests](#tests)  
[Questions](#questions)  
${data.license != "" ? `[${data.license}](#license)  ` : ""}

# Description
${data.description}

# Installation
${data.installation}

# Usage
${data.usage}

# Contributing
${data.contributing}

# Tests
${data.tests}

# Questions
${data.questions}
[Maintainer](https://github.com/${data.github})  
For further questions, direct emails [here](mailto:${data.email})

${renderLicenseSection(data.license)}
`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
};
