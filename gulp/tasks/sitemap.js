// TASK - SITEMAP

'use strict';

var gulp            = require('gulp'),
    sitemap         = require('gulp-sitemap'),
    config          = require('../config/sitemap');

gulp.task('sitemap', function () {

    gulp.src(config.src)
        .pipe(sitemap({
            siteUrl: config.url
        }))
    .pipe(gulp.dest(config.dest));

});
