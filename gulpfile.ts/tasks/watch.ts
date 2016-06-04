const gulp = require('gulp');
const watch = require('gulp-watch');
const sequence = require('gulp-watch-sequence');
const paths = require('../config/paths');

export = gulp.task('watch', () => {
  const queue = sequence(300);

  // Html
  watch(paths.sources.index, queue.getHandler('development:html', 'favicons'));

  // Styles
  watch(paths.sources.styles, () => gulp.start('development:styles'));
});
