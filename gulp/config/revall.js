'use strict';

var path = require('./_global').paths;

module.exports = {
  src: path.dest + '**',
  dontRename: [/^\/favicon.ico$/g, '.html', '.xml'],
  dest: path.prod,
}
