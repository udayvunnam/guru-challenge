# Chiliz Challenge Metaverse App

Avax version of Challenge Metaverse ( Version of Hiring Purpose )

## To-Do for Candidates

This version include Single Metaverse landing page, and also connected with Node.js back-end to interact Smart Contract.
"Yarn run start" will launch front-end and back-end, You can check our current development version of UI.
If you face package dependecy issues, please try to solve and report it.
Once you confirm all features of the project, send report to email we contacted you.

## Report Convention (Do not make complex, just answer with a few lines of sentence for each to-do)

1. Name: Uday Vunnam
2. Upgradeable Features you found in the project
3. Package/dependency Issues you found while running or inappropriate coding style & convention (Include How to upgrade easily upto Node 18+)

### Frontend

- [create react app is dead](https://github.com/reactjs/react.dev/pull/5487) and subsequently all of its dependencies are not well maintained anymore. We can remove craco too.
- We can move the project to https://vitejs.dev/ which is the default recommendation for most of the frontend projects and provides lot of defaults and instant feedback loop
- Typescript is good to have. Provides type safety, intellisense and can avoid usual bugs, makes project maintainable.
- upgraded to React 18
- fix warning for key in LoadingModal

### Backend

- issues while installing `ndb -> node-pty`. We don't need dependency anymore. `node --inspect index.js` will suffice
- A lot of packages are unnecessary

### Repo

- backend also has package.json. Using Lerna or monorepo tool like [Nx](https://nx.dev/) will make things simpler

4. How to make reward system with our $CHZ Token

## Available Scripts

In the project directory, you can run:

### `yarn install`

Install node 16.20.0

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`
