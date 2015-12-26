// TASK - NUNJUCKS - CONVERT NUNJUCKS PAGES TO HMTL

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    plumber         = require('gulp-plumber'),
    stylus          = require('gulp-stylus'),
    postcss         = require('gulp-postcss'),
    uncss           = require('gulp-uncss'),
    glob            = require('glob'),
    sourcemaps      = require('gulp-sourcemaps'),
    configTask      = require('../config/stylus'),
    configGlobal    = require('../config/_global'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    processorsCombined;

processorsCombined = configTask.processors.concat(configTask.processorsProd);

gulp.task('stylus', function() {
  return gulp.src(configTask.src)
    .pipe(plumber(configGlobal.onError))
    .pipe(configGlobal.isProduction ? gutil.noop() : sourcemaps.init())
    .pipe(stylus())
    .pipe(configGlobal.isProduction ? uncss({html: glob.sync(configTask.uncssGlob), ignore: configTask.uncssIgnore}) : gutil.noop())
    .pipe(configGlobal.isProduction ? postcss(processorsCombined) : postcss(configTask.processors))
    .pipe(configGlobal.isProduction ? gutil.noop() : sourcemaps.write(configTask.mapWrite))
    .pipe(gulp.dest(configTask.dest))
    .pipe(reload({stream:true}))
});
