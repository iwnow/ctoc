var gulp = require('gulp');
var concat = require('gulp-concat');
var browserify = require('browserify'),
    //watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    sourceFile = './wsrc/js/app.js',
    destFolder = './wwwroot/js/',
    destFile = 'app.js';
 var ts = require('gulp-typescript');

gulp.task('ts', function () {
    return gulp.src(['wsrc/ts/*.ts', 'typings/tsd.d.ts'])
        .pipe(ts({
            module: 'commonjs',
            target: 'es5',
            outDir: 'wsrc/js'
        }))
        .pipe(gulp.dest('wsrc/js'));
}); 
 
gulp.task('js', ['ts'], function() {
  return browserify(sourceFile)
        .bundle()
        .pipe(source(destFile))
        .pipe(gulp.dest(destFolder));
});

gulp.task('default', ['js']);

gulp.task('watch', function(){
   var watcher = gulp.watch('wsrc/ts/*.ts', ['js']);
    watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    }); 
});
