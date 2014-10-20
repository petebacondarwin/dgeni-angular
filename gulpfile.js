var gulp = require('gulp');
var Dgeni = require('dgeni');
var del = require('del');
var bower = require('bower');
var runSequence = require('run-sequence');

gulp.task('dgeni', function() {
  try {
    var dgeni = new Dgeni([require('./docs/dgeni-conf')]);
    return dgeni.generate();
  } catch(x) {
    console.log(x.stack);
    throw x;
  }
});

gulp.task('bower', function() {
  var bowerTask = bower.commands.install();
  bowerTask.on('log', function (result) {
    console.log('bower:', result.id, result.data.endpoint.name);
  });
  bowerTask.on('error', function(error) {
    console.log(error);
  });
  return bowerTask;
});

gulp.task('assets', ['bower'], function() {
  return gulp.src('bower_components/**/*')
    .pipe(gulp.dest('build/lib'));
});

gulp.task('clean', function(done) {
  del(['./build'], done);
});

gulp.task('watch', ['default'], function() {
  return gulp.watch(['docs/**/*', 'src/**/*'], ['default']);
});

gulp.task('default', function(cb) {
  runSequence('clean', ['dgeni', 'assets'], cb);
});