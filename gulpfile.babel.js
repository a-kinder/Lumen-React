'use strict';

import gulp from 'gulp';

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