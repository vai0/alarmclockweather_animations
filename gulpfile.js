var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('sass', function() {
  return gulp.src('main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

gulp.task('watch', ['browserSync', 'sass'], function() {
  gulp.watch('main.scss', ['sass']);
});

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})
