// TASK - SERVE

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    browserSync     = require('browser-sync'),
    reload          = browserSync.reload,
    configTask      = require('../config/serve');

gulp.task('serve', ['default'], function () {

    browserSync({
        notify: configTask.notify,
        server: {
            baseDir: configTask.baseDirectory
        },
        open: configTask.browserOpen
    });

    [ 'html', 'css', 'js', 'img' ].forEach(function(target) {
        gulp.watch(configTask.watch[target].src, [configTask.watch[target].task]);
    });

});
