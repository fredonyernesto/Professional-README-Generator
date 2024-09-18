// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  if (license === 'GNU AGPLv3') {
    return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)]${renderLicenseLink(license)}`
  }
  if (license === 'GNU FDLv1.3') {
    return `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)]${renderLicenseLink(license)}`
  }
  if (license === 'GNU LGPLv3') {
    return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)]${renderLicenseLink(license)}`
  }
  if (license === 'Mozilla Public License 2.0') {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)]${renderLicenseLink(license)}`
  }
  if (license === 'Apache 2.0 License') {
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)]${renderLicenseLink(license)}`
  }
  if (license === 'Boost Software License 1.0') {
    return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)]${renderLicenseLink(license)}`
  }
  if (license === 'MIT License') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]${renderLicenseLink(license)}`
  }
  if (license === 'The Unlicense') {
    return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]${renderLicenseLink(license)}`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }
  if (license === 'GNU AGPLv3') {
    return '(https://www.gnu.org/licenses/agpl-3.0)'
  }
  if (license === 'GNU FDLv1.3') {
    return '(https://www.gnu.org/licenses/fdl-1.3)'
  }
  if (license === 'GNU LGPLv3') {
    return '(https://www.gnu.org/licenses/lgpl-3.0)'
  }
  if (license === 'Mozilla Public License 2.0') {
    return '(https://opensource.org/licenses/MPL-2.0)'
  }
  if (license === 'Apache 2.0 License') {
    return '(https://opensource.org/licenses/Apache-2.0)'
  }
  if (license === 'Boost Software License 1.0') {
    return '(https://www.boost.org/LICENSE_1_0.txt)'
  }
  if (license === 'MIT License') {
    return '(https://opensource.org/licenses/MIT)'
  }
  if (license === 'The Unlicense') {
    return '(http://unlicense.org/)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }
  return `## License\nThis project is licensed under the ${license}. For more information, please visit ${renderLicenseLink(license)}.`;
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}
          
## Description
${data.description}

## Table of Contents (Optional)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Test](#test)
- [Questions](#questions)
          
## Installation 
${data.installation}

## Usage
${data.usage}

## License
${renderLicenseSection(data.license)}

## How to Contribute
${data.contribution}

## Test
${data.test}

## Questions
[${data.github}](https://github.com/${data.github})
`;
}

module.exports = generateMarkdown;
