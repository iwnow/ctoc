var gulp = require('gulp');



gulp.task('styles', function() {
  return gulp.src('node_modules/bootstrap/dist/bootstrap.min.css')
        .pipe(gulp.dest('wwwroot/css/'))
        .on('error', function (err) {
            console.log(err.toString());
    });
});

gulp.task('scripts', function() {
  return gulp.src('node_modules/jquery/dist/jquery.min.css')
  .pipe(gulp.dest('wwwroot/js/'))
  .on('error', function (err) {
            console.log(err.toString());
    });
});

gulp.task('default', ['styles', 'scripts'], function() {
});