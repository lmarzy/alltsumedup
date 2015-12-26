'use strict';

var path = require('./_global').paths;

module.exports = {
  src: path.src + 'js/main.js',
  outputName: 'bundle.js',
  presets: ["es2015"],
  dest: path.dest + 'js',
  jsHintOptions: {
    esnext: true
  },
  jsHintStyle: "jshint-stylish"
}
