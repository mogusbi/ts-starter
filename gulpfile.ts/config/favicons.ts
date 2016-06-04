const paths = require('./paths');

const config = {
  appName: 'Breeze',
  html: paths.output.index,
  path: paths.hardcoded.favicons,
  background: '#16a085',
  display: 'browser',
  replace: true,
  icons: {
    appleStartup: false,
    opengraph: false,
    twitter: false
  }
};

export = config;
