const gulp = require('gulp');
const { series } = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('./tsconfig.json');

const tsTransformation = () => {
  return (
    gulp.src('./src/**/*.ts')
      .pipe(tsProject())
      .pipe(uglify())
      .pipe(gulp.dest('build'))

  )
}

exports.default =  series(tsTransformation);