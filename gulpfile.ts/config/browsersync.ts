const modRewrite = require('connect-modrewrite');
const paths = require('./paths');

const config = {
  server: {
    baseDir: paths.build,
    middleware: [
      modRewrite([
        '!\\.\\w+$ /index.html [L]'
      ])
    ],
    routes: {
      '/node_modules': paths.node,
      '/dev': paths.source,
      '/config': paths.config,
      '/src': paths.source
    }
  },
  notify: false,
  open: false
};

export = config;
