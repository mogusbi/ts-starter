const paths = require('./paths');

const config = {
  js: {
    src: paths.hardcoded.scripts,
    tpl: '<script src="%s" inline></script>'
  }
};

export = config;
