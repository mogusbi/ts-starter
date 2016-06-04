const gulp = require('gulp');
const sequence = require('gulp-sequence');

export = gulp.task('development:build', (callback: () => void) => {
  // sequence('clean', 'karma', 'lint', 'fonts', ['development:styles', 'development:html'], 'favicons', callback);
  sequence('clean', 'lint', 'fonts', ['development:styles', 'development:html'], 'favicons', callback);
});
