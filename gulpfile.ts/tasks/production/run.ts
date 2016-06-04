const gulp = require('gulp');
const sequence = require('gulp-sequence');

export = gulp.task('production:run', (callback: () => void) => {
  sequence('production:build', 'serve', 'watch', callback);
});
