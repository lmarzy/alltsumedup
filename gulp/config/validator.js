'use strict';

var path = require('./_global').paths;

module.exports = {
  src: path.dest + '**/*.html',
  dest: path.dest + 'validation',
  format: 'html'
}
