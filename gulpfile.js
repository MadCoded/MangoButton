var gulp = require('gulp');

var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var size = require('gulp-size');


gulp.task('stats', function () {
    gulp.src('./*')
        .pipe(size('pretty'));
});

gulp.task('sass', function () {
    gulp.src(['./*.scss'])
        .pipe(sass())
        .pipe(gulp.dest('./dev/css'))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./prod/css'));
});


gulp.task('multi', ['sass', 'stats']);
gulp.task('watch', function () {
    gulp.watch('*.scss', ['sass']);
});