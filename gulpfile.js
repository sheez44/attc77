var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass');

var jsSources = [
    'components/js/*.js'
];

var sassSources = ['components/scss/application.scss'];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
});

gulp.task('compass', function() {
   gulp.src(sassSources)
       .pipe(compass({
           sass: 'components/scss',
           image: 'components/img',
           style: 'expanded'
       }))
       .pipe(gulp.dest('builds/development/css'))
});