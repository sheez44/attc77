var gulp = require('gulp'),
    concat = require('gulp-concat');

var jsSources = [
    'components/js/*.js'
];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest('build/js'))
});
