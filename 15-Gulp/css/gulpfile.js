const gulp = require('gulp');
const { series, parallel } = require('gulp');
const sass = require('gulp-sass');
const uglifyCss = require('gulp-uglifycss');
const concat = require('gulp-concat');

const sassTransformation = () => {
  return (
    gulp.src('./src/sass/index.scss')
      .pipe(sass().on('err', sass.logError))
      .pipe(uglifyCss({ 
          "uglyComments": true
      }))
      .pipe(concat('style.min.css'))
      .pipe(gulp.dest('./build/css'))
  );
};

const htmlCopy = () => {
  return (
    gulp.src('./src/**/*.html')
      .pipe(gulp.dest('build/html'))
  )
}

exports.default = parallel(sassTransformation, htmlCopy);
