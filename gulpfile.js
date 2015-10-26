var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');
var templateCache = require('gulp-angular-templatecache');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var minifyHTML = require('gulp-minify-html');
var ngAnnotate = require('gulp-ng-annotate');
var babel = require('gulp-babel');
var gls = require('gulp-live-server');
var mergeStream = require('merge-stream');
var plumber = require("gulp-plumber");
var flatten = require('gulp-flatten');
var del = require("del");

var paths = {
    scriptsApplication: [
        "app/app.js",
        "app/**/*.js",
        "!app/vendors/**/*.min.js"
    ],
    scriptsVendors: [
        "app/vendors/js/angular.min.js",
        "app/vendors/**/*.min.js"
    ],
    sassFiles: [
        "app/**/*.scss",
        "app/app.scss"
    ],
    cssFiles: [
        "app/**/*.css"
    ],
    buildFile: [
        //"dist/*",
        "app/fonts/**/*",
        "app/imgs/*",
        "app/index.html"
    ],
    copyVendorsJSMin: [
        "node_modules/angular/angular.min.js",
        "node_modules/angular-bootstrap/ui-bootstrap.min.js",
        "node_modules/angular-i18n/angular-locale_fr-fr.js",
        "node_modules/angular-*/angular-*.min.js"
    ],
    copyVendorsCSSMin: [
        "node_modules/animate.css/animate.min.css",
        "node_modules/font-awesome/css/font-awesome.min.css",
        "node_modules/bootstrap-css-only/css/bootstrap.min.css",
        "node_modules/bootstrap-css-only/css/bootstrap-theme.min.css"
    ],
    copyVendorsFonts: [
        "node_modules/font-awesome/fonts/*",
        "node_modules/bootstrap-css-only/fonts/*"
    ],
    htmlFiles: 'app/**/*.html'
};

gulp.task('generateJS', function () {

    stream = mergeStream();

    stream.add(
        gulp.src(paths.scriptsApplication)
            .pipe(plumber())
            .pipe(babel())
            .pipe(ngAnnotate())
            .pipe(uglify())
    );
    stream.add(gulp.src(paths.htmlFiles)
            .pipe(plumber())
            .pipe(minifyHTML({
                quotes: true
            }))
            .pipe(templateCache({
                standalone: false,
                root: "app/",
                module: "website"
            }))
    );

    return stream
        .pipe(concat('script.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('generateVendorsJS', function () {

    stream = mergeStream();

    stream.add(gulp.src(paths.scriptsVendors));

    return stream
        .pipe(concat('vendors.min.js'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('generateCSS', function () {

    stream = mergeStream();

    stream.add(
        gulp.src(paths.sassFiles)
            .pipe(plumber())
            .pipe(concat("all.scss"))
            .pipe(sass())
            .pipe(autoprefixer())
        //.pipe(gulp.dest('build/'))
    );
    stream.add(
        gulp.src(paths.cssFiles)
            .pipe(autoprefixer())
    );
    return stream
        .pipe(plumber())
        .pipe(cssmin())
        .pipe(concat("style.min.css"))
        .pipe(gulp.dest('dist/'));
});

gulp.task('serve', ["generateVendorsJS", "generateJS", "generateCSS"], function () {

    //1. run your script as a server
    var server = gls.new('server.js');
    server.start();

    gulp.watch(paths.scriptsApplication, ['generateJS']);
    gulp.watch(paths.scriptsVendors, ['generateJS']);
    gulp.watch(paths.htmlFiles, ['generateJS']);
    gulp.watch(paths.sassFiles, ['generateCSS']);
    gulp.watch(paths.cssFiles, ['generateCSS']);

    gulp.watch(['dist/**'], function (file) {
        server.notify.apply(server, [file]);
    });
});

gulp.task('build', function () {
    stream = mergeStream();

    stream.add(gulp.src(paths.buildFile, {base: 'app'}).pipe(gulp.dest('build')));
    stream.add(gulp.src("./dist/*", {base: './'}).pipe(gulp.dest('build')));
    stream.add(gulp.src("./app/vendors/fonts/*").pipe(flatten()).pipe(gulp.dest('build/fonts')));

    return stream;
});

gulp.task('copyVendors', function () {
    stream = mergeStream();
    stream.add(gulp.src(paths.copyVendorsJSMin).pipe(flatten()).pipe(gulp.dest('app/vendors/js')));
    stream.add(gulp.src(paths.copyVendorsCSSMin).pipe(flatten()).pipe(gulp.dest('app/vendors/css')));
    stream.add(gulp.src(paths.copyVendorsFonts).pipe(flatten()).pipe(gulp.dest('app/vendors/fonts')));

    return stream;
});

gulp.task('clean', function (cb) {
    del(['dist'], cb);
    del(['build'], cb);
});