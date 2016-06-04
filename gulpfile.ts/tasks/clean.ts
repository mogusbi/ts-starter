const gulp = require('gulp');
const del = require('del');
const paths = require('../config/paths');

export = gulp.task('clean', (callback: () => void) => {
  del([
    paths.build,
    paths.reports
  ]).then(() => callback());
});
