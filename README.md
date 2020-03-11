This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Linting
  - This is a test project to show a sample linting + formatting configuration. The .eslintrc.js extends CRA's default linting and includes:
  Airbnb typescript config
  Jest recommended config + style rules
  @testing-library/react recommended config
  Prettier integration and recommended config
   
## Git Hooks
  - Runs prettier and lint commands as a precommit hook (using husky and lint-staged). Will prevent committing of unlinted code.
  
## Config
  If you do not want linting errors to stop you from building the application (e.g. during local development), simply go to .env and set EXTEND_ESLINT=false. Now your custom lint rules will only show errors/warnings in the IDE, not in the browser.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Note: this project is also configured to run linting before the test using the 'pretest' command.

### `yarn lint`

Runs our ESLint on all .js, .jsx, .ts, and .tsx files (more file types to be added as needed).
Run 'yarn lint --fix' to automatically fix linting issues.
As Prettier has been configured as an ESLint rule, it is recommended to turn on 'editor.formatOnSave' rule in your VSCode
settings to avoid unnecessary lint warnings.

### `yarn docz:dev`

Finds all .mdx files in your /src, creates a docz site, and launches a local server.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
