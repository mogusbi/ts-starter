const gulp = require('gulp');
const sequence = require('gulp-sequence');

export = gulp.task('production:build', (callback: () => void) => {
  // sequence('clean', 'karma', 'lint', 'fonts', ['production:scripts', 'production:styles'], 'production:html', 'production:clean', callback);
  sequence('clean', 'lint', 'fonts', ['production:scripts', 'production:styles'], 'production:html', 'production:clean', callback);
});
