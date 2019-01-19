var gulp = require('gulp');
// Requires the gulp-sass plugin
var sass = require('gulp-sass');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');

gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref())
    .pipe(gulpIf('*.js', uglify()))
    // Minifies only if it's a CSS file
    .pipe(gulpIf('*.css', cssnano()))
    .pipe(gulp.dest('dist'))
});

gulp.task('sass', function(){
    return gulp.src('source-files')
      .pipe(sass()) // Using gulp-sass
      .pipe(gulp.dest('destination'))
});

gulp.task('sass', function(){
    return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
      .pipe(sass()) // Converts Sass to CSS with gulp-sass
      .pipe(gulp.dest('app/css'))
});

  gulp.task('watch', function(){
    gulp.watch('app/scss/**/*.scss', gulp.series('sass')); 
    // Other watchers
  })