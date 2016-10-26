var gulp = require("gulp");
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
    return gulp.src([
			"app/index.html",
			"app/lib/mobile-detect/mobile-detect.min.js",
			"app/lib/socket.io-client/socket.io.js", 
			"app/lib/bootstrap-css/css/bootstrap.min.css",
			"app/css/*.css"
		])
        .pipe(gulp.dest("app/dist"));
});

gulp.task("default",["copy"],function(){
   console.log("Gulp completed..."); 
});
