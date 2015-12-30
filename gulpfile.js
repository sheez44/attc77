var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect');

var jsSources = [
    'components/js/*.js'
];

var sassSources = ['components/scss/application.scss'];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
        .pipe(connect.reload())
});

gulp.task('compass', function() {
   gulp.src(sassSources)
       .pipe(compass({
           sass: 'components/scss',
           image: 'components/img',
           style: 'expanded'
       }))
       .pipe(gulp.dest('builds/development/css'))
       .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch(jsSources, ['js']);
    gulp.watch(['components/scss/*.scss', 'components/scss/modules/*.scss'], ['compass']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'builds/development/',
        livereload: true
    });
});

gulp.task('default', ['js', 'compass', 'connect', 'watch']);