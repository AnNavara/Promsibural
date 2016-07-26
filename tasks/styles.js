'use strict';

const $ = require('gulp-load-plugins')();
const gulp = require('gulp');
const combine = require('stream-combiner2').obj;
const postcssUS = require('postcss-unique-selectors');
const postcssZIndex = require('postcss-zindex');
const postcssMQPacker = require('css-mqpacker');
const postcssMR = require('postcss-merge-rules');
const postcssFF = require('postcss-flexbugs-fixes');
const autoprefixer = require('autoprefixer');

// const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == 'development';
//      $.if(isDevelopment, $.sourcemaps.init()),
//      $.if(isDevelopment, $.sourcemaps.write()),

module.exports = function(options) {

  return function() {
    return combine(
      gulp.src(options.src),
      // $.sourcemaps.init(),
      $.sass(),
      $.postcss([
        // require('postcss-devtools')({precise: true}),
        postcssZIndex,
        postcssMQPacker({
          sort: true
        }),
        // postcssUS,
        // postcssMR,
        // postcssFF,
        autoprefixer({ browsers: ['> 2.5% in RU', 'last 2 version', 'ie 9', 'ios 6'], flexbox: 'no-2009'})
      ]),
      $.csscomb(),
      // $.sourcemaps.write(),
      gulp.dest(options.dest)
    ).on('error', $.notify.onError());
  };

};
