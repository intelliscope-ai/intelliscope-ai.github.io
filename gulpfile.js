//gulpfile.js
var gulp = require('gulp'),
    pug = require('gulp-pug');

function pugToHtml() {
    return gulp
        .src('views/*.pug')
        .pipe(
            pug({
                pretty: true,
            })
        )
        .pipe(gulp.dest('public'));
}
exports.pugToHtml = pugToHtml;
