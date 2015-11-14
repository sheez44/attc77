(function() {
    "use strict";
    require('es6-promise').polyfill();
    var gulp = require('gulp');
    var autoprefixer = require('gulp-autoprefixer');
    var minifyCSS = require('gulp-minify-css');
    var uglify = require('gulp-uglify');
    var rename = require('gulp-rename');
    var concat = require('gulp-concat');
    var compass = require('gulp-compass');

    gulp.task('css', function() {
       gulp.src('./scss/*.scss')
           .pipe(compass({
               config_file: './scss/config.rb',
               css: 'css',
               sass: 'scss'
           }))
           .pipe(autoprefixer())
           .pipe(minifyCSS())
           .pipe(rename('app.css'))
           .pipe(gulp.dest('build/css'))
    });

    gulp.task('js', function() {
        gulp.src('./js/script.js')
            .pipe(uglify())
            .pipe(gulp.dest('build/js'))
    });

    gulp.task('watch', function() {
        gulp.watch('./scss/*.scss', ['css']);
        gulp.watch('./js/script.js', ['js']);
    });

    gulp.task('default', ['css', 'html', 'js']);
}());
