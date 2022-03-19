# Shopy - a shopping cart list app

## Task

X Create a shopping list app that has 3 pages: a landing page, a page for displaying previous shopping list history and a page for adding new items to your shopping list.
X The landing page should be the default one that should always be a fallback, either when the app is accessed without any page information or when the page specified does not exist.
X The other 2 pages should be loaded lazily.
X The second page should display the previous shopping history in a table, using a pipe or pipes for parsing server-side mocked data in a sensible manner.
X The data should be provided as JSON through an Observable and contain the following information: datetime of purchase, name of product, name of store.

- In the table, the name of the store should be a link opening the store’s home page in a new tab. The datetime should be displayed in a format similar to “Sunday, February 14th 2020, 15:25”. User should be able to filter the table by all 3 data fields using a form.
- The last page should display a shopping list, where it is possible to add and remove items dynamically. No server calls necessary.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
