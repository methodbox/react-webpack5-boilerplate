# react-webpack-boilerplate

A React boilerplate starter with Webpack 5, hot module reloading (with browser refresh) and support for Webpack styles (CSS only), images and fonts loaders already configured. Also includes React Styleguidist pre-configured.

## Usage

Just `npm install`.

### Entry Point

The entry point is `/src/index.js`. Nothing should be included in the component defined in this file except your Main component. This is done for you. See the official React docs for more info.

### Components

Components go in `/src/components`. Make subfolders as needed. ES6 and classes are fully supported.

### Styles, Images & Fonts

Just place your static files in their respective directories. The appropriate Webpack loaders are already configured.

```bash
src/styles
src/images
src/fonts

```

### `dist` Folder

Do not delete the `dist` folder or the included `index.html`, or the app will not work. When building for production the `bundle.js` file will be output to this directory. Place `index.html` and `bundle.js` in your web server's web root directory to serve this as a live site.

### Run the App

You can run the app in a hot-reload browser session with `npm start`.

### Build the App

You can build the app for production with `npm run build`. This will dump the output to the `dist` folder.

### Generating Docs

React Styleguidist is included. [JSDoc comments](https://react-styleguidist.js.org/docs/documenting) will be pulled into the docs automatically. You can create your own docs using MarkDown syntax and`.md` files as needed, too.

For example, to document a specific component just place a file with the same name as your component in same path as the component file, using the extension ".md":

```bash
MyComponent.js
MyComponent.md
```

See the [React Styleguidist documentation](https://react-styleguidist.js.org/) for more examples and advanced configuration.

# express-mongo-boilerplate
