// TASK - NUNJUCKS - CONVERT NUNJUCKS PAGES TO HMTL

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    plumber         = require('gulp-plumber'),
    nunjucks        = require('gulp-nunjucks-html'),
    fs              = require('fs'),
    data            = require('gulp-data'),
    frontMatter     = require('gulp-front-matter'),
    htmlmin         = require('gulp-htmlmin'),
    browserSync     = require('browser-sync'),
    configTask      = require('../config/nunjucks'),
    configGlobal    = require('../config/_global'),
    reload          = browserSync.reload;

gulp.task('nunjucks', function() {
  return gulp.src(configTask.src)
    .pipe(plumber(configGlobal.onError))
    .pipe(data(function(file) { return JSON.parse(fs.readFileSync(configTask.data)); }))
    .pipe(frontMatter({ property: 'frontMatter', remove: true }))
    .pipe(nunjucks({ searchPaths: configTask.paths }))
    .pipe(configGlobal.isProduction ? htmlmin({collapseWhitespace: true}) : gutil.noop())
    .pipe(gulp.dest(configTask.dest))
    .pipe(reload({stream:true}))
});
