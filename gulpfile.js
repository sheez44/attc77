var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect');

var jsSources = [
    'components/js/*.js'
];

var sassSources = ['components/scss/application.scss'];

var htmlSources =  ['builds/development/**.html'];

var jsonSources = ['builds/development/js/*.json'];

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
    gulp.watch(htmlSources, ['html']);
    gulp.watch(jsonSources, ['json']);
});

gulp.task('connect', function() {
    connect.server({
        root: 'builds/development/',
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src(htmlSources)
        .pipe(connect.reload())
});

gulp.task('json', function() {
    gulp.src(jsonSources)
        .pipe(connect.reload())
});


gulp.task('default', ['html', 'json', 'js', 'compass', 'connect', 'watch']);