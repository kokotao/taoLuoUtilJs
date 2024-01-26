const path = require('path');

module.exports = {
    mode: 'production',
  entry: './src/taoluoUtils.js',
  output: {
    filename: 'taoluoUtil.js',
    path: path.resolve(__dirname, 'dist')
  }
};
