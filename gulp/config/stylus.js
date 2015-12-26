'use strict';

var path          = require('./_global').paths,
    autoprefixer  = require('autoprefixer'),
    mqPacker      = require('css-mqpacker'),
    cssNano       = require('cssnano');

module.exports = {
  src: path.src + 'stylus/main.styl',
  uncssGlob: 'dev/*.html',
  uncssIgnore: [''],
  mapWrite: './map',
  dest: path.dest + 'css',
  processors: [
    autoprefixer({browsers: ['last 2 version']})
  ],
  processorsProd: [
    mqPacker,
    cssNano
  ]
}
