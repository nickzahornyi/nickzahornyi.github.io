const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('babel', () => {
	return gulp.src('src/js/script.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('src/js/'));
});

gulp.task('compress', function() {
  return gulp.src('src/js/script.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js/'));
});
