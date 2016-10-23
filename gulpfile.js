var gulp = require("gulp");
  // gulpLoadPlugins = require('gulp-load-plugins'),
  // plugins = gulpLoadPlugins(),
  // runSequence = require('run-sequence');
var browserify = require("browserify");
var reactify = require("reactify");
var source = require("vinyl-source-stream");

gulp.task("bundle", function () {
    return browserify({
        entries: "./app/main.jsx",
        debug: true
    }).transform(reactify)
        .bundle()
        .pipe(source("main.js"))
        .pipe(gulp.dest("app/dist"))
});

gulp.task("copy", ["bundle"], function () {
    return gulp.src(["app/index.html","app/lib/bootstrap-css/css/bootstrap.min.css","app/css/*.css"])
        .pipe(gulp.dest("app/dist"));
});

// CSS minifying task
// gulp.task('cssmin', function () {
//   return gulp.src(["app/lib/bootstrap-css/css/bootstrap.min.css","app/css#<{(|.css"])
//     .pipe(plugins.cssmin())
//     .pipe(plugins.concat('application.min.css'))
//     .pipe(gulp.dest('app/dist'));
// });

// Nodemon task
// gulp.task('nodemon', function () {
//   return plugins.nodemon({
//     script: './server/server.js',
//     nodeArgs: ['--debug'],
//     ext: 'js,html,css',
//     watch: _.union(["app/actions/*.js", "app/components/*.js", "app/css/*.css", "app/services/*.js", "app/stores/*.js", "app/server/*/*.js"])
//   });
// });
//
//
// Run the project in debug mode
// gulp.task('start', function(done) {
//   runSequence('env:dev', 'cssmin', 'copy', ['nodemon'], done);
// });

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});
