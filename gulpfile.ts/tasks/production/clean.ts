const gulp = require('gulp');
const del = require('del');
const paths = require('../../config/paths');

export = gulp.task('production:clean', (callback: () => void) => {
  del([
    paths.output.styles,
    paths.output.scripts
  ]).then(() => callback());
});
