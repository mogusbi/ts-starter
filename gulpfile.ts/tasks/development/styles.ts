const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const browsersync = require('browser-sync');
const errors = require('../../utils/errors');
const paths = require('../../config/paths');

const config = {
  autoprefixer: require('../../config/autoprefixer')
};

export = gulp.task('development:styles', () => {
  return gulp
    .src(paths.sources.styles)
    .pipe(sourcemaps.init())
      .pipe(sass())
      .pipe(autoprefixer(config.autoprefixer))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.output.styles))
    .on('error', errors)
    .pipe(browsersync.stream());
});
