var browserify = require('browserify');
var browserSync = require('browser-sync');
var buffer = require('vinyl-buffer');
var changed = require('gulp-changed');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var gulp = require('gulp');
var gutil = require('gulp-util');
var rimraf = require('rimraf');
var	run = require('run-sequence');
var	sass = require('gulp-sass');
var	source = require('vinyl-source-stream');
var sourcemaps = require('gulp-sourcemaps');
var templateCache = require('gulp-angular-templatecache');

var settings = {
    js: {
        main: 'source/index.js',
        name: 'app.js',
        watch: [
            'source/**/*.js'
        ]
    },
    html: {
        main: 'source/index.html',
        name: 'index.html',
        templates: 'source/templates/**/*.html',
        watch: [
            'source/templates/**/*.html'
        ]
    },
    css: {
        main: 'source/**/*.scss',
        name: 'style.css',
        watch: [
            'source/**/*.scss'
        ]
    },
    dest: './dist/'
};

var handleError = function (error) {
    console.log(error);
    this.emit('end');
};

gulp.task('html', function () {
    gulp
        .src(settings.html.main)
        .pipe(gulp.dest(settings.dest));
});

gulp.task('html-watch', ['html'], browserSync.reload);

gulp.task('html-templates', function () {
    gulp
        .src(settings.html.templates)
        .pipe(templateCache())
        .pipe(gulp.dest(settings.dest));
});

gulp.task('html-templates-watch', ['html-templates'], browserSync.reload);

gulp.task('js', function() {
    var bundle = browserify({
        debug: true,
        entries: settings.js.main
    });

    return bundle.bundle()
        .on('error', handleError)
        .pipe(source(settings.js.name))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(settings.dest));
});

gulp.task('js-watch', ['js'], browserSync.reload);

gulp.task('css', function () {
    gulp
        .src(settings.css.main)
        .pipe(sass().on('error', handleError))
        .pipe(concat(settings.css.name))
        .pipe(gulp.dest(settings.dest));
});

gulp.task('css-watch', ['css'], browserSync.reload);

gulp.task('browser-sync', function () {
    browserSync.init({
        server: {
            baseDir: settings.dest
        },
        port: '8080'
    });

    gulp.watch(settings.html.main, ['html-watch']);
    gulp.watch(settings.html.watch, ['html-templates-watch']);
    gulp.watch(settings.css.watch, ['css-watch']);
    gulp.watch(settings.js.watch, ['js-watch']);
});

gulp.task('clean', function () {
    rimraf('./dist', function (error, stdout, stderr) {});
});

gulp.task('default', ['clean'], function () {
    run('html', 'html-templates', 'js', 'css', 'browser-sync');
});
