const { series, parallel} = require('gulp');
const gulp = require('gulp');

const { appHTML, appCSS, appJs, appIMG} = require('./gulpTasks/app');
const { depsCSS, depsFonts} = require('./gulpTasks/deps');
const { monitoringFiles, server} = require('./gulpTasks/server');

module.exports.default = series(
  parallel(
    series(appHTML, appCSS, appJs, appIMG),
    series(depsCSS, depsFonts)
  ),
  server,
  monitoringFiles
)
  
