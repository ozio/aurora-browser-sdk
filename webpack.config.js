const { CheckerPlugin } = require('awesome-typescript-loader');

module.exports = {
  entry: {
    index: './src/index.ts',
    keyboard: './src/middlewares/keyboard',
  },

  output: {
    filename: './build/[name].js',
    libraryTarget: 'umd',
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
