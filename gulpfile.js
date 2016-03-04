var gulp = require('gulp');
var path = require('path');
var sourcemaps = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
var del = require('del');
var concat = require('gulp-concat');
var runSequence = require('run-sequence');
var watch = require('gulp-watch');

// SERVER
gulp.task('clean', function () {
    return del('dist')
});

// CLIENT

/*
 jsNPMDependencies, sometimes order matters here! so becareful!
 */
var jsNPMDependencies = [
    'angular2/bundles/angular2-polyfills.js',
    'systemjs/dist/system.src.js',
    'rxjs/bundles/Rx.js',
    'angular2/bundles/angular2.dev.js',
    'angular2/bundles/router.dev.js',
    'angular2/bundles/http.dev.js',
    'systemjs/dist/system-polyfills.js',
    'es6-shim/es6-shim.min.js',
    'angular2/es6/dev/src/testing/shims_for_IE.js'
];

gulp.task('build:index', function () {
    var mappedPaths = jsNPMDependencies.map(file => {return path.resolve('node_modules', file)});

    //Let's copy our head dependencies into a dist/libs
    var copyJsNPMDependencies = gulp.src(mappedPaths, {base: 'node_modules'})
        .pipe(gulp.dest('server/assets/libs'));

    //Let's copy our index into dist
    var copyIndex = gulp.src('client/index.html')
        .pipe(gulp.dest('server/assets'));
    var copyHtmls = gulp.src('client/app/htmls/*.html')
        .pipe(gulp.dest('server/assets/app/htmls'));
    return [copyJsNPMDependencies, copyIndex, copyHtmls];
});

gulp.task('build:app', function () {
    var tsProject = ts.createProject('client/tsconfig.json');
    var tsResult = gulp.src('client/**/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('server/assets'));
});

gulp.task('build', function (callback) {
    runSequence('clean', 'build:index', 'build:app', callback);
});

gulp.task('watch', function () {
    watch(['client/**/*'], function () {
        gulp.start('build');
    });
});

gulp.task('default', ['build']);