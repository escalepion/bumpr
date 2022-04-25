# A sample app for Bumper
Clone the app into your folder.
npm install  -> npm start will run the project on your local

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
Created sample unit testing in src/lib/helpers directory. 
### `npm test -- --coverage --watchAll=false`

Launches the test coverage score.\
### `npm run cypress:open`

Runs e2e cypress testing\


Note: Didn't use redux-persist for persistance. Instead just used localstorage manually since it s easy setup