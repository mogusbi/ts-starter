const gulp = require('gulp');
const builder = require('systemjs-builder');
const typescript = require('gulp-typescript');
const merge = require('merge-stream');
const browsersync = require('browser-sync');
const errors = require('../../utils/errors');
const paths = require('../../config/paths');

const config = {
  typescript: require('../../config/typescript')
};

gulp.task('production:scripts:compile', () => {
  const tsProject = typescript.createProject(paths.typescript.baseConfig, config.typescript);
  const typings = gulp.src(paths.typings);
  const scripts = gulp.src([
    paths.sources.scripts,
    '!' + paths.scripts.tests.unit,
    '!' + paths.scripts.tests.e2e
  ]);

  return merge(typings, scripts)
    .pipe(typescript(tsProject))
    .js
    .on('error', errors)
    .pipe(gulp.dest(paths.output.app))
    .pipe(browsersync.stream());
});

export = gulp.task('production:scripts', ['production:scripts:compile'], (callback: () => void) => {
  const bundle = new builder({
    defaultJSExtensions: true
  });

  bundle
    .buildStatic(paths.bundle.entry, paths.bundle.output, {
      format: 'cjs',
      minify: true,
      mangle: true
    })
    .then(() => callback());
});
