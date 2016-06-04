const gulp = require('gulp');
const typescript = require('gulp-typescript');
const merge = require('merge-stream');
const uglify = require('gulp-uglify');
const browsersync = require('browser-sync');
const errors = require('../../utils/errors');
const paths = require('../../config/paths');

const config = {
  typescript: require('../../config/typescript')
};

gulp.task('production:scripts', () => {
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
    .pipe(uglify())
    .on('error', errors)
    .pipe(gulp.dest(paths.output.app))
    .pipe(browsersync.stream());
});
