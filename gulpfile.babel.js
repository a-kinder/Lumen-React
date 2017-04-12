'use strict';

var gulp = require("gulp");
var babel = require("gulp-babel");

const config = {
    relSrc: 'src',
    src: __dirname + '/public',
    out: __dirname + '/www',
};

const paths = {
    in: {
        indexGlob: config.src + '/index.html',
    },
    out: {
        indexDir: config.out + '/',
    }
};

gulp.task('compile-index', ()=>{

    gulp.src(paths.in.indexGlob)
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest(paths.out.indexDir));


});

gulp.task('build', ()=>{

    runSequence('compile-index');
});

gulp.task('watch', ['build'], () => {

    gulp.watch(paths.in.indexGlob, watchOpts, ['compile-index']);

    // gulp.watch(paths.in.imgGlob, watchOpts, ['compress-images']);

    // gulp.watch(paths.in.tsGlob, watchOpts, ['compile-typescript']);

    // gulp.watch(paths.in.lessGlob, watchOpts, ()=>{
    //     runSequence('compile-less', 'compile-index');
    // });
});


gulp.task('default', ['watch']);
