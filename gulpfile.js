'use strict';

const gulp = require('gulp');
const portVal = 8082;

function lazyRequireTask(taskName, path, options) {
  options = options || {};
  options.taskName = taskName;
  gulp.task(taskName, function(callback) {
    let task = require(path).call(this, options);

    return task(callback);
  });
}

lazyRequireTask('html', './tasks/html', {
  src: './source/*.html',
  dest: './build/'
});

lazyRequireTask('styles', './tasks/styles', {
  src: 'source/_styles/styles.scss',
  dest: './build/css',
  rename: '.css'
});

lazyRequireTask('min:css', './tasks/minCss', {
  src: './build/css/styles.css',
  rename: 'styles.min.css',
  dest: './build/css/'
});

lazyRequireTask('critical', './tasks/criticalCss', {
  base: './build',
  src: 'index.html',
  styles: './build/css/styles.min.css',
  dimensions: [
    {
      height: 400,
      width: 400
    },
    {
      height: 900,
      width: 1300
    }
  ],
  dest: 'build/index.html'
});

lazyRequireTask('serve', './tasks/serve', {
  base: './build'
});

lazyRequireTask('js:main', './tasks/js', {
  base: './source/_js/*.js',
  name: 'script.js',
  dest: './build/js/'
});

lazyRequireTask('js:lib', './tasks/jsLib', {
  base: './source/_js/lib/*.js',
  dest: './build/js/lib/'
});

// gulp.task('js', gulp.parallel('js:main', 'js:lib'));

lazyRequireTask('assets:img', './tasks/assetsImg', {
  src: 'source/_img/*.{png,jpg}',
  dest: './build/img'
});

lazyRequireTask('assets:svg', './tasks/assetsSvg', {
  src: 'source/_img/*.svg',
  dest: './build/img',
  mixin: './tmp/styles'
});

lazyRequireTask('clean', './tasks/clean', {
  paths: ['build/js/*.js', 'build/img/*', 'build/*.html', 'tmp/*']
});


gulp.task('watch', function() {
  gulp.watch('source/**/*.html', gulp.series('html'));
  gulp.watch('source/_styles/**/*.scss', gulp.series('styles'));
  gulp.watch('source/_img/*.{jpg,png}', gulp.series('assets:img'));
  gulp.watch('source/_img/*.svg', gulp.series('assets:svg', 'styles'));
  gulp.watch('source/_js/*.js', gulp.series('js:main'));
  gulp.watch('source/_js/lib/*.js', gulp.series('js:lib'));
});

gulp.task('build', gulp.series('html', 'js:lib', 'js:main', 'styles', 'assets:img', 'watch'));

// gulp.task('production', 'prod',
//   gulp.series(
//     'clean',
//     gulp.parallel('html', 'assets:svg', 'assets:img'),
//     gulp.series('styles', 'min:css', 'critical')
//   )
// );
