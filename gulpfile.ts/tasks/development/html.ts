const gulp = require('gulp');
const paths = require('../../config/paths');

export = gulp.task('development:html', () => {
  return gulp
    .src(paths.sources.index)
    .pipe(gulp.dest(paths.build));
});
