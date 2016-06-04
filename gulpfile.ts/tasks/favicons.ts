const gulp = require('gulp');
const favicons = require('gulp-favicons');
const paths = require('../config/paths');

const config = {
  favicons: require('../config/favicons')
};

export = gulp.task('favicons', () => {
  return gulp
    .src(paths.sources.favicon)
    .pipe(favicons(config.favicons))
    .pipe(gulp.dest(paths.output.icons));
});
