const { src, dest, watch, parallel } = require("gulp");
const sass = require("gulp-sass");
const minifyCSS = require("gulp-csso");

function csss() {
    return src("assets/scss/*.scss")
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(dest("scss"));
}

function watchFiles() {
    watch("./assets/scss/**/**", css);
}
exports.css = csss;
exports.watch = watch;
exports.default = parallel(css, watchFiles);