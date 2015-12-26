'use strict';

var path = require('./_global').paths;

module.exports = {
  css: {
    src: path.src + 'stylus/_assets/**/*',
    dest: path.dest + 'css/assets/'
  },
  images: {
    src: path.src + 'img/*',
    dest: path.dest + 'img/'
  }
}
