# Project Name
TASK MANAGEMENT APPLICATION

## Overview
This project aims to Add new Task, Displays a list of tasks, allows editing, deletion, and task completion..

## Installation
To set up the development environment, follow these steps:

1. Clone this repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Start the development server: `npm start`

## Components
The project structure is organized into the following components:

- **TaskManagementApp:** Parent component managing tasks and task editing.
- **TaskList:** Displays a list of tasks, allows editing, deletion, and task completion.
- **TaskItem:** Represents individual tasks in the task list.

## Development Process

### 1. Project Initiation
The project was initiated with the objective of creating a task management system using React.

Tools used:
- React
- React Router DOM

### 2. Environment Setup
The development environment was set up using Node.js and npm. React and other required dependencies were installed.

Tech Stack:
- Node.js
- React
- React Router DOM

### 3. Component Design and Structure
The components were designed in a hierarchical structure:

- TaskManagementApp
  - TaskList
    - TaskItem

### 4. Coding Process
The code logic focused on managing task state, implementing task editing, deletion, and completion functionalities.

Key Logic:
- State management using React Hooks (useState, useEffect)
- Task addition, deletion, editing, and completion logic

### 5. Component Implementation
Components were implemented as follows:

- **TaskManagementApp:** Manages tasks and edited tasks state.
- **TaskList:** Displays a grid of tasks, handles editing, deletion, and task completion.
- **TaskItem:** Represents an individual task with checkboxes, task details, and editing functionality.

### 6. Testing Phase
Test cases were created to ensure component functionalities:

- TaskList component tested for rendering task names, checkboxes, and header.

### 7. Troubleshooting and Bug Fixing
Identified and resolved issues related to:
- Local storage persistence
- Rendering of components on page refresh



### 9. Final Checks and Validation
Functionality was validated to ensure:
- Tasks were added, edited, and deleted successfully.

## Conclusion and Next Steps
The project successfully achieved its objective of creating a task management system using React. Future enhancements might include user authentication, additional task attributes, and improved UI/UX.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
