const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: './src/index.ts',

  output: {
    filename: './build/index.js',
    library: 'AuroraSDK',
    libraryTarget: 'window',
  },

  resolve: {
    extensions: ['.ts', '.js'],
  },

  devtool: 'none',

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'tslint-loader',
            options: {
              failOnError: false,
              emitWarning: true,
            },
          },
        ],
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
    ],
  },

  plugins: [
    new CheckerPlugin(),
  ],
};
