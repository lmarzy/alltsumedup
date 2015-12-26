'use strict';

var gutil = require('gulp-util'),
    isProduction;

isProduction = gutil.env.prod ? true : false;

module.exports = {
  paths: {
    src: './src/',
    dest: 'dev/',
    prod: 'dist/'
  },
  isProduction: isProduction,
  onError: function (err) {
      gutil.log(gutil.colors.red(err.message));
      this.emit('end');
  }
}
