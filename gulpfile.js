/**
 * Gulp Build
 *
 * This is a gulp build for development and distribution of a custom bootstrap
 * theme.
 */
var path      = require('path');
var gulp      = require('gulp');
var clean     = require('gulp-clean');
var connect   = require('gulp-connect');
var less      = require('gulp-less');
var rename    = require('gulp-rename');
var gutil     = require('gulp-util');

/**
 * Connect
 *
 * Create a quick dev server for livereload.
 */
gulp.task('connect', function () {
  connect.server({
    livereload: true
  });
});

/**
 * Watch
 *
 * Watch for changes to html and css.
 */
gulp.task('watch', function () {
  gulp.watch(['src/**/*.less'], ['less-dev']);
  gulp.watch(['**/*.html'], ['html-dev']);
});

/**
 * Clean dev build.
 */
gulp.task('clean', function () {
  gulp.src('./build')
    .pipe(clean());
})

/**
 * Develoment Less
 *
 * Compile less for development.
 */
gulp.task('less-dev', function () {
  gulp.src('src/main.less')
    .pipe(
      less({
        paths: [
          // Add vendor paths for bootstrap import:
          path.join(__dirname, 'vendor')
        ]
      })
      // Log errors:
      .on('error', gutil.log)
    )
    .pipe(rename('humble-style.css'))
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

/**
 * Reload HTML
 */
gulp.task('html-dev', function () {
  gulp.src('**/*.html')
    .pipe(connect.reload());
});

/**
 * Default task.
 *
 * Start dev server, clean, do a build, and start watcher.
 */
gulp.task('default', ['connect', 'clean', 'less-dev', 'watch']);
