'use strict';

import gulp from 'gulp';
import runSequence from 'run-sequence';
import htmlmin from 'gulp-htmlmin';
import webpack from 'gulp-webpack';
import sass from 'gulp-sass';
const config = {
    relSrc: 'src',
    src: __dirname + '/public',
    out: __dirname + '/public',
};

const paths = {
    in: {
        indexGlob: config.src + '/../resources/views/home.php',
        tsGlob: config.relSrc + '/**/*.tsx',
    },
    out: {
        indexDir: config.out + '/',
        jsDir: '/js'
    }
};

const watchOpts = {};
 
gulp.task('sass', function () {
  return gulp.src('./resources/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('./resources/sass/**/*.scss', ['sass']);
});

gulp.task('compile-typescript', ()=>{

    return gulp.src(paths.in.tsEntry)
        .pipe(plumber())
        // .pipe(sourceMaps.init())
        .pipe(webpack(require('./webpack.config.js')))
        // .pipe(uglify())
        // .pipe(sourceMaps.write("."))
        .pipe(gulp.dest(paths.out.jsDir));
});

gulp.task('compile-index', ()=>{

    gulp.src(paths.in.indexGlob)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(paths.out.indexDir));


});

gulp.task('build', ()=>{

    runSequence('compile-index');
});

gulp.task('watch', ['build', 'sass'], () => {

    gulp.watch(paths.in.indexGlob, watchOpts, ['compile-index']);

    // gulp.watch(paths.in.imgGlob, watchOpts, ['compress-images']);

    // gulp.watch(paths.in.tsGlob, watchOpts, ['compile-typescript']);

    // gulp.watch(paths.in.lessGlob, watchOpts, ()=>{
    //     runSequence('compile-less', 'compile-index');
    // });
});


gulp.task('default', ['watch']);
