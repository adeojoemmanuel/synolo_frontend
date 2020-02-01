Synollo is a crowd-funding real-estate platform.

## CSS Architecture
7-1 architecture (5 used in the project) was implemented for the css under

```
src/assets/scss
```

Do not modify mixin ```responsive``` under:
```
src/assets/scss
```

BEM style convention was implemented.

DO NOT integrate third part css (e.g Bootstrap, tailwind e.t.c.)

## Routes
All routes are located in the app.js file.

React-router was used to manage routes.


## Component Structure

Please note: React-hooks are to be used and not class components expect where necessary.

The component consist of:

```
1. Page file (Holding the page render component and doesn't perform any API call)
    
    CONVENTION:
    home.page.js
```

```
2. Component file (Holding the API call component and takes in the page file)

    CONVENTION:
    home.component.js
```

## State Management
The context-api is used to manage state and no external state management tool was use.

## Assets
All additional assets (icons, images) can be found under the folder structure assets.

Image sizes:
```
Rounded Images for about page: 167px by 167px;

```

## Helpers
Helpers hold every re-usable piece of code that is not necessarily a component.

## Future consideration
Integration with typescript.



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


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

https://serverless-stack.com/chapters/code-splitting-in-create-react-app.html

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
