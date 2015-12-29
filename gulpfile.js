var gulp = require('gulp'),
    concat = require('gulp-concat');
    browserify = require('gulp-browserify');

var jsSources = [
    'components/js/*.js'
];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulp.dest('builds/development/js'))
});
