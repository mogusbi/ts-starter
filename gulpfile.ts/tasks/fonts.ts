const gulp = require('gulp');
const paths = require('../config/paths');

export = gulp.task('fonts', () => {
  return gulp
    .src(paths.sources.fonts)
    .pipe(gulp.dest(paths.output.fonts));
});
