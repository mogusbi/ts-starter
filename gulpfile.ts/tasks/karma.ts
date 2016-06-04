const gulp = require('gulp');

gulp.task('karma:run', function task (callback: () => void) {
  const Server = require('karma').Server;
  const config = require('../config/karma');

  new Server(config, callback).start();
});

gulp.task('karma:build', () => {
  const typescript = require('gulp-typescript');
  const sourcemaps = require('gulp-sourcemaps');
  const tplinline = require('gulp-inline-ng2-template');
  const errors = require('../utils/errors');
  const paths = require('../config/paths');

  const config = {
    typescript: require('../config/typescript'),
    tplinline: require('../config/tplinline')
  };

  const tsProject = typescript.createProject(paths.typescript.appConfig, config.typescript);

  return gulp
    .src([
      paths.typings,
      paths.sources.scripts,
      '!' + paths.sources.bootstrap,
      '!' + paths.scripts.tests.e2e
    ])
    .pipe(sourcemaps.init())
      .pipe(tplinline(config.tplinline))
      .pipe(typescript(tsProject))
      .js
    .pipe(sourcemaps.write())
    .on('error', errors)
    .pipe(gulp.dest(paths.output.app));
});

gulp.task('karma:clean', (callback: () => void) => {
  const del = require('del');
  const paths = require('../config/paths');

  del(paths.build).then(() => callback());
});

gulp.task('karma:remap', () => {
  const remap = require('remap-istanbul/lib/gulpRemapIstanbul');
  const errors = require('../utils/errors');
  const paths = require('../config/paths');

  return gulp
    .src(paths.karma.coverage)
    .pipe(remap({
      reports: {
        'html': paths.karma.report
      },
      fail: true
    }))
    .on('error', errors);
});

export = gulp.task('karma', (callback: () => void) => {
  const sequence = require('gulp-sequence');

  sequence('clean', 'karma:build', 'karma:run', 'karma:remap', 'karma:clean', callback);
});
