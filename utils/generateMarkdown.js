// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const licenses = {
  Apache: {
    name: "Apache 2.0 License",
    badge:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
  },
  BSD3: {
    name: "BSD 3-Clause License",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  },
  BSD2: {
    name: "BSD 2-Clause License",
    badge:
      "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  },
  MIT: {
    name: "The MIT License",
    badge:
      "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  },
  GPL3: {
    name: "GNU GPL v3",
    badge:
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  },
  GPL2: {
    name: "GNU GPL v2",
    badge:
      "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)",
  },
};

function renderLicenseBadge(license) {
  if (licenses[license].badge) return licenses[license].badge;
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = {
  generateMarkdown,
  renderLicenseBadge,
};
