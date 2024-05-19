# Password Generator

This project is a web application built with Angular, TypeScript, and SCSS that generates a random password each time.

## Deployment

The project is live deployed at: [Password Generator - Akash Gupta](https://akash-gupta-password-generator.netlify.app/)

Feel free to explore the live deployment.

## Table of Contents

- [Setup and Installation](#setup-and-installation)
- [Running Locally](#running-locally)
- [Project Details](#project-details)
- [Technologies Used](#technologies-used)
- [Assignment Details](#assignment-details)
- [Assumptions](#assumptions)

## Setup and Installation

1. Clone the repository to your local machine using the following command: `git clone https://github.com/akgupta20/password-generator`
2. Navigate to the project directory: `cd password-generator`
3. Install dependencies using the command: `npm install`

## Running Locally

To run the project locally after completing the setup and installation steps:

1. Start the development server using the command: `npm start`
2. Open your web browser and navigate to `http://localhost:4200` to view the application.

## Project Details

The objective of this project was to build a password generator application using Angular. The application allows users to generate random passwords based on specified criteria.

### Design Choices

- **Responsive Design**: Implemented a responsive design to ensure optimal viewing experience across various devices.
- **Dynamic UI**: Integrated dynamic UI elements to enhance user interaction and experience.

## Technologies Used

- **Angular**: Used as the primary framework for building the web application.
- **TypeScript**: Utilized for adding type safety and enhancing the development experience.
- **SCSS**: Employed for styling the application with modular and maintainable CSS.

## Assignment Details

### Stage 1

- User can enter the length of the password.
- Clicking the "Generate" button generates a password containing all alphabets and displays it in a div.

### Stage 2

- Added checkboxes for user to select the following options:
  1. Include alphabets (uppercase/lowercase)
  2. Include numbers

### Stage 3

- Added an extra checkbox for including special characters.


## Assumptions

- The password length entered by the user must be a non-negeative.
- By default, the generated password will include only alphabets if no checkboxes are selected.
- If the user selects multiple checkboxes, the password will include a mix of the selected character types.
- The special characters considered include common symbols such as `!@#$%^&*()_+[]{}|;:',.<>?`.

## GitHub Repository

The source code for this project is available on GitHub: [Password Generator Repository](https://github.com/akgupta20/password-generator)

