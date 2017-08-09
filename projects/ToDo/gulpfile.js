var gulp       	 = require('gulp'),
	sass         = require('gulp-sass'),
	browserSync  = require('browser-sync'),
	concat       = require('gulp-concat'),
	uglify       = require('gulp-uglifyjs'),
	cssnano      = require('gulp-cssnano'),
	rename       = require('gulp-rename'),
	del          = require('del'),
	imagemin     = require('gulp-imagemin'),
	pngquant     = require('imagemin-pngquant'),
	cache        = require('gulp-cache'),
	autoprefixer = require('gulp-autoprefixer'),
	gcmq 				 = require('gulp-group-css-media-queries');

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
	.pipe(sass())
	.pipe(autoprefixer(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	// .pipe(cmq({ log: true }))
	.pipe(gcmq())
	// .pipe(cssnano())
	.pipe(gulp.dest('app/css'))
	.pipe(browserSync.reload({stream: true}))
});

// gulp.task('gcmq', function () {
//     gulp.src('app/css/main.css')
//         .pipe(gcmq())
//         .pipe(gulp.dest('dist/css/main.css'));
// });

// gulp.task('scripts', function(){
// 	return gulp.src([
// 		'app/libs/**/*.js'
// 	])
// 	// .pipe(concat('libs.min.js'))
// 	// .pipe(uglify())
// 	.pipe(gulp.dest('app/js'));
// });

// gulp.task('css-libs', ['sass'], function(){
// 	return gulp.src('app/libs/**/*.css')
// 	.pipe(concat('libs.css'))
// 	// .pipe(cssnano())
// 	// .pipe(rename({suffix: '.min'}))
// 	.pipe(gulp.dest('app/css'));
// });

gulp.task('browser-sync', function(){
	browserSync({
		server: {
			baseDir: 'app'
		},
		notify: false
	});
});

gulp.task('clean', function(){
	return del.sync('dist');
});

gulp.task('clearCache', function(){
	return gulp.cache.clearAll();
});

gulp.task('img', function(){
	return gulp.src('app/img/**/*').
	pipe(cache(imagemin({
		interlaced: true,
		progressive: true,
		svgoPlugins: [{removeViewBox: false}],
		une: [pngquant()]
	})))
	.pipe(gulp.dest('dist/img'));
});

gulp.task('watch', ['browser-sync', 'sass'], function(){
	gulp.watch('app/sass/**/*.sass', ['sass']);
	gulp.watch('app/*.html', browserSync.reload);
	gulp.watch('app/js/**/*.js', browserSync.reload);
});

gulp.task('build', ['clean', 'img', 'sass'], function(){

	var buildCss = gulp.src('app/css/**/*')
	.pipe(gulp.dest('dist/css'));

	var buildFonts = gulp.src('app/fonts/**/*')
	.pipe(gulp.dest('dist/fonts'));

	var buildJS = gulp.src('app/js/*')
	.pipe(gulp.dest('dist/js'));

	var buildHTML = gulp.src('app/*.html')
	.pipe(gulp.dest('dist'));

	var buildLibs = gulp.src('app/libs/**/*')
	.pipe(gulp.dest('dist/libs'));

});
