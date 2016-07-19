'use strict';

const gulp = require('gulp');
const browserSync = require('browser-sync').create('serve');

module.exports = function(options) {

  return function() {
    browserSync.init({
      open: false,
      ui: {
        port: 8082
      },
      server: {
        baseDir: options.base
      }
    });
    browserSync.watch('build/**/*.*').on('change', browserSync.reload);
  };

};
