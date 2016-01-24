var gulp = require('gulp');
var concat = require('gulp-concat');
 
/*gulp.task('js', function() {
  return gulp.src('./wsrc/js/*.js')
    .pipe(concat('app.js'))
    .pipe(gulp.dest('./wwwroot/js/'));
});*/

var browserify = require('browserify'),
    //watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    sourceFile = './wsrc/js/app.js',
    destFolder = './wwwroot/js/',
    destFile = 'app.js';
 
gulp.task('js', function() {
  return browserify(sourceFile)
        .bundle()
        .pipe(source(destFile))
        .pipe(gulp.dest(destFolder));
});

/*gulp.task('watch', function() {
  var bundler = watchify(sourceFile);
  bundler.on('update', rebundle);
 
  function rebundle() {
    return bundler.bundle()
      .pipe(source(destFile))
      .pipe(gulp.dest(destFolder));
  }
 
  return rebundle();
});*/