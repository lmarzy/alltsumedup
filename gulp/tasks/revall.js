// TASK - REVALL - revisions all assets

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    plumber         = require('gulp-plumber'),
    RevAll          = require('gulp-rev-all'),
    configTask      = require('../config/revall'),
    configGlobal    = require('../config/_global'),
    onError;

gulp.task('revAll', function () {
    var revAll = new RevAll({
      dontRenameFile: configTask.dontRename
    });
    gulp.src(configTask.src)
      .pipe(plumber(configGlobal.onError))
      .pipe(revAll.revision())
      .pipe(gulp.dest(configTask.dest));
});
