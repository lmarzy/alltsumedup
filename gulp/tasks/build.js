// TASK -  BUILD

'use strict';

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    runSequence     = require('run-sequence'),
    configTask      = require('../config/build'),
    configGlobal    = require('../config/_global');


if(!configGlobal.isProduction) {
  gulp.task('default', function(cb) {
    runSequence(configTask.a, configTask.b, cb);
  });
}else {
  gulp.task('default', function(cb) {
    runSequence(configTask.a, configTask.b, configTask.c, cb);
  });
}
