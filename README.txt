Todos:
- css compile
- lint
- test
- template cache

Notes:

react --> React package
react-dom --> it enables us to use react for the browser
babel-core -> Babel compiler core
babel-loader ->  This package allows transpiling JavaScript files using Babel and webpack.
babel-preset-env -->  A Babel preset that compiles es2015 down to ES5 by automatically determining the Babel plugins and  polyfills you need based on your targeted browser or runtime  environments.
babel-preset-react -->  Babel preset for all React plugins.
sass-loader ->  Loads a SASS/SCSS file and compiles it to CSS.
node-sass ->  Node-sass is a library that provides binding for Node.js to LibSass
 It allows you to natively compile .scss files to css at incredible speed.
style-loader ->  Adds CSS to the DOM by injecting a <style> tag //  It's recommended to combine style-loader with the css-loader
css-loader -->  The css-loader interprets @import and url() like import/require() and will resolve them.
webpack --> webpack package
webpack-dev-server -> development server for webpack
normalize.css -> different browser have their various default stlyling this package helps reset all browser default styling

The webpack exports an object which is the configuration for our app. I will be explaining some core concepts here:

Entry --> This is the path to our src folder which is the entry point
Output --> Is an Object of two properties path(path for the out file) fileName('bundle.js' name of the generated file)
rules --> takes an array of rules
loader --> specify a loader to use when a the extension provided in the test is match which is either js, jsx, scss, css
exclude -> specifies what to exclude when search for modules
use -> takes in an array of loader
devtool -> specifies a development tool in our case the 'cheap-module-eval-source-map' makes debuging easier for us by show us the error on the exact line in the exact file, without this errors are reference in the bundle.js.
devServer --> is an object of property contentBase which specifies where we want to serve our files from to the browser
watch -> reloads the server on changes to file in our app which makes the browser to automatically reloads
Note: changes to the webpack.config.js file are not watch, meaning you have to restart your server

Useful articles:

https://blog.cloudboost.io/bundling-your-assets-with-webpack-756677e04369
https://medium.com/@binyamin/creating-a-node-express-webpack-app-with-dev-and-prod-builds-a4962ce51334
https://medium.com/@johnstew/webpack-hmr-with-express-app-76ef42dbac17
