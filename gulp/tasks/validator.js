// TASK - HTML-VALIDATOR

var gulp            = require('gulp'),
    gutil           = require('gulp-util'),
    htmlv           = require('gulp-html-validator'),
    configTask      = require('../config/validator'),
    configGlobal    = require('../config/_global');

gulp.task('htmlValidation', function () {

    if(!configGlobal.isProduction) {
      gulp.src(configTask.src)
      .pipe(htmlv({format: configTask.format}))
      .pipe(gulp.dest(configTask.dest));
    }

});
