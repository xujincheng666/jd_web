/**
 * Created by Administrator on 2017/5/10.
 */
var gulp = require("gulp");
var less = require("less");
var cleancss = require("gulp-clean-css");
var plugins = require("gulp-load-plugins")();
gulp.task("show",function () {
    console.log("hello gulp");
});
gulp.task('myless',function () {
    gulp.src('app/style/*.less')
        .pipe(plugins.less())
        .pipe(gulp.dest('app/style/'));
});
gulp.task("mywatch",function () {
    gulp.watch("app/style/*.less",["myless"])
});