This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

# Flatiron React Redux Portfolio Project - Bullet Projects Journal

The Bullet Projects Journal is based on the original bullet journal and a basic clone of the bullet journal app but applies it to project management.  Visit https://bulletjournal.com/pages/learn for more information.  The home page shows you your upcoming events and contains links to create a new project or to view your current projects.

## Installation

Fork database from https://github.com/cavu757/bullet-projects-app.  This will contain the Rails backend and the React-Redux frontend.  The repository is linked to the repositories for the frontend and backend but below are the links for each just in case.

Frontend: https://github.com/cavu757/bullet-projects-frontend

Backend: https://github.com/cavu757/bullet-projects-backend

Once you have forked both frontend and backend, first `cd` into the backend directory (`bullet-projects-backend`), `bundle install` to install all gems required, and `rake db:migrate` to initialize database.  Run API backend by entering `rails s`.  If you do not have anything else running, your backend should start up on http://localhost:3000/

Open a new terminal window, `cd` into the frontend directory (`bullet-projects-frontend`) and `npm install` to install all required modules.  Run React-Redux frontend by entering `npm start`.

There is a seed file but it is not required to run the application.  Go ahead and start creating some projects and adding bullets (which can be events, tasks and/or notes).

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/cavu757/bullet-projects-app. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.

## License

The app is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).

## Code of Conduct

Everyone interacting in the Bullet Projects Journal project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [code of conduct](https://github.com/cavu757/bullet-projects-app/blob/master/CODE_OF_CONDUCT.md).
