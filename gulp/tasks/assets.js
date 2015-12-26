// TASK - ASSETS - FOR MOVING ACROSS CSS ASSETS, IMAGES AND ANY OTHER NEEDED BY THE PROJECT

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    imagemin        = require('gulp-imagemin'),
    configTask      = require('../config/assets'),
    configGlobal    = require('../config/_global'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload;

gulp.task('assets:css', function() {
    return gulp.src(configTask.css.src)
    .pipe(configGlobal.isProduction ? imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }) : gutil.noop())
    .pipe(gulp.dest(configTask.css.dest))
    .pipe(reload({stream:true}))
});

gulp.task('assets:images', function() {
    return gulp.src(configTask.images.src)
    .pipe(configGlobal.isProduction ? imagemin({
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
    }) : gutil.noop())
    .pipe(gulp.dest(configTask.images.dest))
    .pipe(reload({stream:true}))
});
