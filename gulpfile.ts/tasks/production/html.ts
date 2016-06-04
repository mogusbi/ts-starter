const gulp = require('gulp');
const htmlreplace = require('gulp-html-replace');
const htmlmin = require('gulp-htmlmin');
const inlinesource = require('gulp-inline-source');
const sequence = require('gulp-sequence');
const paths = require('../../config/paths');

const config = {
  htmlreplace: require('../../config/htmlreplace'),
  htmlmin: require('../../config/htmlmin'),
  inlinesource: require('../../config/inlinesource')
};

gulp.task('production:html:minify', () => {
  return gulp
    .src(paths.output.index)
    .pipe(htmlreplace(config.htmlreplace))
    .pipe(inlinesource(config.inlinesource))
    .pipe(htmlmin(config.htmlmin))
    .pipe(gulp.dest(paths.build));
});

export = gulp.task('production:html', (callback: () => void) => {
  sequence('development:html', 'favicons', 'production:html:minify', callback);
});
