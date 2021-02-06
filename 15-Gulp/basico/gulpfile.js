const gulp = require('gulp');
const { series, parallel } = require('gulp');

const before1 = gulpResp => {
  console.log('Before 1 Task!')

  return gulpResp()
}

const before2 = gulpResp => {
  console.log('Before 2 Task!')

  return gulpResp()
}

function copy(gulpResp) {
  console.log('Copy Task!')
  gulp.src('pastaA/**/*.txt')
    .pipe(gulp.dest('pastaB'))

  return gulpResp()
}

function end(gulpResp) {
  console.log('End!')

  return gulpResp()
}


module.exports.default = series(
  parallel(before1, before2),
  copy,
  end
)