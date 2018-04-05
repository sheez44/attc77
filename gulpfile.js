var gulp = require('gulp'),
    concat = require('gulp-concat'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    connect = require('gulp-connect'),
    gulpif = require('gulp-if'),
    uglify = require('gulp-uglify'),
    autoprefixer = require('gulp-autoprefixer'),
    jsonminify = require('gulp-jsonminify'),
    minifyHTML = require('gulp-minify-html');

var env,
    jsSources,
    sassSources,
    htmlSources,  
    jsonSources,
    outputDir,
    sassStyle;

env = process.env.NODE_ENV || 'development';

// SET NODE_ENV=production & gulp

if (env === 'development') {
    outputDir = 'builds/development/';
    sassStyle = 'expanded'
} else {
    outputDir = 'builds/production/';
    sassStyle = 'compressed';
}

console.log(outputDir);

jsSources = [
    'components/js/*.js'
];

sassSources = ['components/scss/application.scss'];

htmlSources =  [outputDir + '**.html'];

jsonSources = [outputDir + 'js/*.json'];

gulp.task('js', function() {
    gulp.src(jsSources)
        .pipe(concat('scripts.js'))
        .pipe(browserify())
        .pipe(gulpif(env !== 'development', uglify()))
        .pipe(gulp.dest(outputDir + 'js'))
        .pipe(connect.reload())
});

gulp.task('compass', function() {
   gulp.src(sassSources)
       .pipe(compass({
           sass: 'components/scss',
           image: 'components/img',
           style: sassStyle
       }))
       .pipe(autoprefixer())
       .pipe(gulp.dest(outputDir + 'css'))
       .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch(jsSources, ['js']);
    gulp.watch(['components/scss/*.scss', 'components/scss/modules/*.scss'], ['compass']);
    gulp.watch('builds/development/*.html', ['html']);
    gulp.watch('builds/development/js/*.json', ['json']);
});

gulp.task('connect', function() {
    connect.server({
        root: outputDir,
        livereload: true
    });
});

gulp.task('html', function() {
    gulp.src('builds/development/*.html')
        .pipe(gulpif(env !== 'development', minifyHTML()))
        .pipe(gulpif(env !== 'development', gulp.dest(outputDir)))
        .pipe(connect.reload())
});

gulp.task('json', function() {
    gulp.src('builds/development/js/*.json')
        .pipe(gulpif(env !== 'development', jsonminify()))
        .pipe(gulpif(env !== 'development', gulp.dest('builds/production/js')))
        .pipe(connect.reload())
});


gulp.task('default', ['html', 'json', 'js', 'compass', 'connect', 'watch']);