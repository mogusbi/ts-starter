const gulp = require('gulp');
const browsersync = require('browser-sync');

const config = {
  browsersync: require('../config/browsersync')
};

export = gulp.task('serve', () => {
  browsersync(config.browsersync);
});
