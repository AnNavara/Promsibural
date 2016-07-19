'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;

module.exports = function(options) {

  return function() {
    return combine(
      gulp.src(options.src),
      $.fileInclude({
        prefix: '@@',
        basepath: '@file'
      }),
      $.removeEmptyLines(),
      $.htmlhint(), // remember to remove /r
      $.htmlhint.reporter('htmlhint-stylish'),
      gulp.dest(options.dest)
    ).on('error', $.notify.onError());
  };

};
