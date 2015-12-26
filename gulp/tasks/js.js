// TASK - BROWSERIFY - CONVERT ES6 AND MODULES USING BABELIFY WITH ES2015 PRESETS

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    plumber         = require('gulp-plumber'),
    babel           = require('gulp-babel'),
    jshint          = require('gulp-jshint'),
    uglify          = require('gulp-uglify'),
    configTask      = require('../config/js'),
    configGlobal    = require('../config/_global'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload;


gulp.task('js', function() {
  return gulp.src(configTask.src)
  .pipe(plumber(configGlobal.onError))
  .pipe(babel({ presets: configTask.presets }))
  .pipe(jshint(configTask.jsHintOptions))
	.pipe(jshint.reporter(configTask.jsHintStyle))
	.pipe(configGlobal.isProduction ? uglify() : gutil.noop())
  .pipe(gulp.dest(configTask.dest))
  .pipe(reload({stream:true}))
});
