# Expense Tracker App

A simple React app to track your income and expenses. Add, view, and delete transactions with a clean UI and real-time balance/statistics updates.

## Features
- Add new income or expense transactions
- View your transaction history
- See your current balance
- View income and expense statistics
- Delete transactions
- State management with React Context and useReducer

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd expense-tracker
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

### Running the App
```bash
npm start
# or
yarn start
```
The app will run at [http://localhost:3000](http://localhost:3000).

## Project Structure
```
expense-tracker/
  src/
    components/    # React components (Balance, History, Statistic, Transaction, etc.)
    context/       # Global state management (GlobalState.js, AppReducer.js)
    App.js         # Main app component
    index.js       # Entry point
  public/          # Static files
  package.json     # Project metadata and scripts
```

## Technologies Used
- React
- React Context API
- useReducer
- CSS

## License
This project is licensed under the MIT License.

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
