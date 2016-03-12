'use strict';
 
var gulp = require('gulp'),
	sass = require('gulp-sass'),
    prefixer = require('gulp-autoprefixer'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    imageop = require('gulp-image-optimization'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload;

gulp.task('sass', function () {
  return gulp.src('src/blocks/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('src/css/'));
});

gulp.task('cssmin', function () {
	gulp.src('src/css/main.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('build/css/'));
});

gulp.task('images', function(cb) {
    gulp.src(['src/**/*.png','src/**/*.jpg','src/**/*.gif','src/**/*.jpeg']).pipe(imageop({
        optimizationLevel: 5,
        progressive: true,
        interlaced: true
    })).pipe(gulp.dest('build/')).on('end', cb).on('error', cb);
});

gulp.task('scripts', function() {
  return gulp.src('src/blocks/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('src/js/'));
});

gulp.task('compress', function() {
  return gulp.src('src/js/all.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('default', ['sass', 'cssmin', 'images', 'scripts', 'compress']);