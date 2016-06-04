const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const nano = require('gulp-cssnano');
const browsersync = require('browser-sync');
const errors = require('../../utils/errors');
const paths = require('../../config/paths');

const config = {
  autoprefixer: require('../../config/autoprefixer'),
  nano: require('../../config/nano')
};

export = gulp.task('production:styles', () => {
  return gulp
    .src(paths.sources.styles)
    .pipe(sass())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(nano(config.nano))
    .pipe(gulp.dest(paths.output.styles))
    .on('error', errors)
    .pipe(browsersync.stream());
});
