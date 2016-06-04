const gulp = require('gulp');
const sequence = require('gulp-sequence');

export = gulp.task('development:run', (callback: () => void) => {
  sequence('development:build', 'serve', 'watch', callback);
});
