'use strict';

module.exports = {
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 80,
  overrides: [
    {
      files: '*.scss',
      options: {
        semi: true,
        parser: 'scss'
      }
    },
    {
      files: '*.html',
      options: {
        parser: 'html'
      }
    }
  ]
};
