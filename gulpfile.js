var gulp = require('gulp');
var Dgeni = require('dgeni');
var del = require('del');

gulp.task('dgeni', ['clean'], function() {
  try {
    var dgeni = new Dgeni([require('./docs/dgeni-conf')]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
});

gulp.task('clean', function(done) {
  del(['./build'], done);
});

gulp.task('default', ['dgeni']);