const gulp = require('gulp');
const webserver = require('gulp-webserver');
const watch  = require('gulp-watch');

const monitoringFiles = async gulpResp => {
  return (
      gulp.src('build')
        .pipe(webserver({
          port: 8080,
          open: true,
          livereload: true,
        }))
    )
}

const server = async gulpResp => {
  return (
    watch('src/**/*.html', () => gulp.series('appHTML')()),
    watch('src/**/*.scss', () => gulp.series('appCSS')()),
    watch('src/**/*.js', () => gulp.series('appJs')()),
    watch('src/assets/imgs/**/*.*', () => gulp.series('appIMG')())
  )
}

module.exports = { monitoringFiles, server }