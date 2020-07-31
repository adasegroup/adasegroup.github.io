var gulp = require('gulp');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var path = require('path');
var folders = require('gulp-folders');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var cp = require('child_process');
var imagemin = require('gulp-imagemin');
var browserSync = require('browser-sync');

var jekyllCommand = (/^win/.test(process.platform)) ? 'jekyll.bat' : 'jekyll';

/*
 * Build the Jekyll Site
 * runs a child process in node that runs the jekyll commands
 */
gulp.task('jekyll-build', function (done) {
	return cp.spawn(jekyllCommand, ['build'], {stdio: 'inherit'})
		.on('close', done);
});

/*
 * Rebuild Jekyll & reload browserSync
 */
gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
	browserSync.reload();
});

/*
 * Build the jekyll site and launch browser-sync
 */
gulp.task('browser-sync', ['jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		},
		port: 2000,
        open: false,
		ghostMode: false
	});
});

/*
* Compile and minify sass
*/
gulp.task('sass', function() {
  gulp.src('src/styles/**/*.scss')
    .pipe(plumber())
    .pipe(sass())
    .pipe(csso())
    .pipe(gulp.dest('assets/css/'));
});

/*
* Compile fonts
*/
gulp.task('fonts', function() {
	gulp.src('src/fonts/**/*.{ttf,woff,woff2}')
	.pipe(plumber())
	.pipe(gulp.dest('assets/fonts/'));
});

/*
 * Minify images
 */
gulp.task('imagemin', function() {
	return gulp.src('src/img/**/*.{jpg,png,gif}')
		.pipe(plumber())
		.pipe(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true }))
		.pipe(gulp.dest('assets/img/'));
});

/**
 * Compile and minify js
 */
// gulp.task('js', function(){
// 	return gulp.src('src/js/**/*.js')
// 		.pipe(plumber())
// 		.pipe(concat('main.js'))
// 		.pipe(uglify())
// 		.pipe(gulp.dest('assets/js/'))
// });

gulp.task('js', folders('src/js', function(folder){
    return gulp.src(path.join('src/js', folder, '**/*.js'))
		.pipe(plumber())
        .pipe(concat(folder + '.js'))
		.pipe(uglify())
        .pipe(gulp.dest('assets/js/'));
}));

gulp.task('watch', function() {
  gulp.watch(['*.{html,md}', '{3ddl,neuro,_content,_includes,_layouts}/**/*.{md,html}', '_data/**/*.yml'], ['jekyll-rebuild']);
  gulp.watch('src/**/*.s{a,c}ss', ['sass', 'jekyll-rebuild']);
  gulp.watch('src/js/**/*.js', ['js', 'jekyll-rebuild']);
  gulp.watch('src/fonts/**/*.{tff,woff,woff2}', ['fonts']);
  gulp.watch('src/img/**/*.{jpg,png,gif}', ['imagemin']);
});

gulp.task('default', ['js', 'sass', 'fonts', 'imagemin', 'browser-sync', 'watch']);
