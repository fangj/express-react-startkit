var gulp = require('gulp');
var wiredep = require('wiredep').stream;
var mainBowerFiles = require('main-bower-files');


gulp.task('copy', function () {  
  gulp.src(mainBowerFiles())
    .pipe(gulp.dest('../server/dist/public/vendor/'));
});

gulp.task('wiredep', function () {  
  gulp.src('../server/dist/public/*.html')
    .pipe(wiredep({
      ignorePath: /(.+\/)*/
    }))
    .pipe(gulp.dest('../server/dist/public/'));
});


gulp.task('default', ['copy','wiredep']);