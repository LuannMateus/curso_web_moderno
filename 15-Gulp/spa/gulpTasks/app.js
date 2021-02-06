const gulp = require('gulp');
const babel = require('gulp-babel');
const htmlMin = require('gulp-htmlmin');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const uglifycss = require('gulp-uglifycss');
const concat = require('gulp-concat');

const appHTML = async () => {
  return (
    gulp.src('src/**/*.html')
      .pipe(htmlMin({
        collapseWhitespace: true
      }))
      .pipe(gulp.dest('build'))
  )
}

const appCSS = async () => {
  return (
    gulp.src('src/assets/sass/index.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(uglifycss({
        "uglyComments": true
      }))
      .pipe(concat('app.min.css'))
      .pipe(gulp.dest('build/assets/css'))
  )
}

const appJs = async () => {
  return (
    gulp.src('src/assets/js/*.js')
      .pipe(babel({
        comments: false,
        presets: ['env']
      }))
      .pipe(uglify())
      .on('error', (err) => console.log(err))
      .pipe(concat('app.min.js'))
      .pipe(gulp.dest('build/assets/js'))
  )
}

const appIMG = async () => {
  return (
    gulp.src('src/assets/imgs/**/*.png')
      .pipe(gulp.dest('build/assets/imgs'))
  )
}

gulp.task('appHTML', appHTML)
gulp.task('appCSS', appCSS)
gulp.task('appJs', appJs)
gulp.task('appIMG', appIMG)

module.exports = {
  appHTML,
  appCSS,
  appJs,
  appIMG
}