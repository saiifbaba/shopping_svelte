# Shopping SPA Project Documentation

#  Project Overview
This project is a single-page application (SPA) built using Svelte, Tailwind CSS, and TypeScript. The application fetches product data from the Fake Store API and provides features like viewing product details, filtering products by category, adding products to a shopping cart, and more.

# Dependencies
Core Dependencies
Svelte: The  used to build this SPA.
Tailwind CSS: A utility-first CSS framework for styling.
TypeScript: Provides static typing for the project.

# Dev Dependencies
ESLint: Lints and ensures code quality.
Prettier: Formats the code according to a consistent style.
Vitest: A testing framework used for unit tests.
svelte-check: Ensures type safety and correct usage of Svelte components.
CI/CD Tools: GitHub Actions are used for continuous integration and deployment.

# Installation
To set up the project locally, follow these steps:

Clone the Repository:

git clone https://github.com/saiifbaba/shopping-spa.git
cd shopping-spa


# Install Dependencies:

Make sure you have Node.js (v18.x or later) and npm installed. You can check your Node.js version using:


node -v
Then, install the project dependencies:


npm install
Configure Environment Variables:

If your project relies on environment variables, create a .env file in the root directory and add your variables there. For example:

env
VITE_API_URL=https://fakestoreapi.com/
However, for this project, no additional environment variables are required.

# Running the Application Locally
To run the application locally during development:

Start the Development Server:

npm run dev
This command will start a local development server. The application should be accessible at http://localhost:5173/.

# Testing the Application:

If you have unit tests set up, you can run them using:


npm test
This command will execute all the unit tests in your project.


# CI/CD Pipeline
The CI/CD pipeline is configured using GitHub Actions. The workflow is defined in the .github/workflows/build.yaml file. It automates testing, building, and deployment processes whenever changes are pushed to the main branch.

# Key Steps in the Workflow:
Checkout Code: The workflow checks out the code from the repository.
Install Dependencies: Dependencies are installed using npm install.
Run Linting and Tests: The code is linted and tested to ensure quality.
Build Project: The project is built for production.
Deploy: If all tests pass, the application is deployed (if configured).

Everything you need to build a Svelte project, powered by create-svelte.

 #  Creating a project
If you're seeing this, you've probably already done this step. Congrats!

# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
Developing
Once you've created a project and installed dependencies with npm install (or pnpm install or yarn), start a development server:

npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
Building
To create a production version of your app:

npm run build
You can preview the production build with npm run preview.

To deploy your app, you may need to install an adapter for your target environment. 








































<!-- # create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment. -->
