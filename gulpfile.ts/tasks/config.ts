const gulp = require('gulp');
const argv = require('yargs').argv;
const replace = require('gulp-replace-task');
const rename = require('gulp-rename');
const paths = require('../config/paths');

const config = {
  replace: require('../config/replace')
};

export = gulp.task('config', () => {
  return gulp
    .src(paths.sources.config)
    .pipe(replace(config.replace(argv.appName, argv.serviceURL)))
    .pipe(rename('config.ts'))
    .pipe(gulp.dest(paths.config));
});
