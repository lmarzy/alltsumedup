'use strict';

var path = require('./_global').paths;

module.exports = {
    src: path.src + 'templates/pages/**/*.html',
    paths: [
      path.src + 'templates',
      path.src + 'templates/layout',
      path.src + 'templates/layout/head',
      path.src + 'templates/layout/foot',
      path.src + 'templates/partials/components',
      path.src + 'templates/partials/layout',
      path.src + 'templates/partials/other'
    ],
    data: path.src + 'templates/data/global.json',
    dest: path.dest
}
