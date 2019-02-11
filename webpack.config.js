const path = require('path');

module.exports = {
  entry: './src/js/main.js',    // We wants our entry point to this path
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.jsx?$/,  // This will match either .js or .jsx
        exclude: /node_modules/
      }, 
      {
        test: /\.s?css$/, // This will match either .scss or .css
        use: [
          'sass-loader'
        ]
      }
    ]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
  contentBase: path.join(__dirname, 'public')
  },
  watch: true
};
