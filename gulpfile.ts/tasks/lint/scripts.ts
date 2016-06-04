const gulp = require('gulp');
const tslint = require('gulp-tslint');
const tslintreporter = require('gulp-tslint-jenkins-reporter');
const paths = require('../../config/paths');
const errors = require('../../utils/errors');

const config = {
  tslintreporter: require('../../config/tslintreporter')
};

export = gulp.task('lint:scripts', () => {
  return gulp
    .src([
      paths.sources.scripts,
      paths.scripts.tests.unit,
      paths.scripts.gulp
    ])
    .pipe(tslint())
    .pipe(tslint.report('prose', { emitError: false }))
    .pipe(tslintreporter(config.tslintreporter))
    .on('error', errors);
});
