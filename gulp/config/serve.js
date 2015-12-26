'use strict';

var gutil = require('gulp-util'),
    path = require('./_global').paths,
    dirToServe;

dirToServe = gutil.env.prod ? 'dist' : 'dev';

module.exports = {
  baseDirectory: dirToServe,
  notify: true,
  browserOpen: false,
  watch: {
    html: {
      src: path.src + 'templates/**',
      task: 'nunjucks'
    },
    css: {
      src: path.src + 'stylus/**',
      task: 'stylus'
    },
    js: {
      src : path.src + 'browserify/**',
      task: 'browserify',
      task: 'js'
    },
    img: {
      src: path.src + 'img/**',
      task: 'assets:images'
    }
  }
}
