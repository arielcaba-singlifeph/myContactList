var gulp = require('gulp');
var jshint= require('gulp-jshint');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

gulp.task('default', ['watch', 'nodemon'], function(){

});

gulp.task('jshint', function(){
    return gulp.src('public/javascripts/**/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'));
});

gulp.task('sass', function(){
    return gulp.src('public/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('public/stylesheets'));
});

gulp.task('watch', function(){
    gulp.watch('public/javascripts/**/*.js', ['jshint']);
    gulp.watch('public/scss/**/*.scss', ['sass']);
});

gulp.task('nodemon', function(){
    nodemon({
        script: 'app.js',
        ext: 'js ejs',
        env: { 'NODE_ENV': 'development'}
    });
});
