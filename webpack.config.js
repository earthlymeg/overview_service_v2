module.exports = {
  entry: __dirname + '/client/src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
    {
        // For pure CSS (without CSS modules)
        test: /\.css$/i,
        exclude: /\.module\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'url-loader?limit=8192',
      }
    ]
  },
  output: {
        filename: 'bundle.js',
        path: __dirname + '/client/dist'
      }
};
