'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import postcss from 'gulp-postcss';
import postcssimport from 'postcss-import';
import sourcemaps from 'gulp-sourcemaps';
import simplevars from 'postcss-simple-vars';
import autoprefixer from 'autoprefixer';
import nested from 'postcss-nested';
import csso from 'postcss-csso';
import image from 'gulp-image';
import watch from 'gulp-watch';
import browsersync from 'browser-sync';

const path = {

   build: {
      html:   'build/',
      css:    'build/css/',
      js:     'build/js/',
      img:    'build/img/',
   },

   src: {
      html:   'src/*.html',
      css:    'src/css/main.css',
      js:     'src/js/bundle.js',
      img:    'src/img/**/*.*',
   },

   watch: {
      html:   'src/**/*.html',
      css:    'src/css/**/*.css',
      js:     'src/js/**/*.js',
      img:    'src/img/**/*.*',
   }
};

const serverConfig = {
   server: {
      baseDir: './build'
   },
   tunnel:     false,
   host:       'localhost',
   port:       3000,
   logPrefix:  'Sovet'
};


gulp.task('build:html', () => {
   gulp.src(path.src.html)
      .pipe( gulp.dest(path.build.html) )
      .pipe( browsersync.reload({
         stream: true
      }));
});

gulp.task('build:css', () => {
   gulp.src(path.src.css)
      .pipe( sourcemaps.init() )
      .pipe( postcss([
         postcssimport,
         simplevars,
         nested,
         autoprefixer,
         csso
      ]))
      .pipe( sourcemaps.write('.') )
      .pipe( gulp.dest(path.build.css))
      .pipe( browsersync.reload({
         stream: true
      }));
});

gulp.task('build:js', () => {
   gulp.src(path.src.js)
		.pipe(babel({
			presets: ['es2015']
		}))
      .pipe( gulp.dest(path.build.js) )
      .pipe( browsersync.reload({
         stream: true
      }));
});

gulp.task('build:img', () => {
   gulp.src(path.src.img)
      .pipe( image() )
      .pipe( gulp.dest(path.build.img) )
      .pipe( browsersync.reload({
         stream: true
      }));
});

gulp.task('watch', () => {
   watch([path.watch.html], () => {
      gulp.start('build:html');
   });

   watch([path.watch.css], () => {
      gulp.start('build:css');
   });

   watch([path.watch.js], () => {
      gulp.start('build:js');
   });

   watch([path.watch.img], () => {
      gulp.start('build:img');
   });
});

gulp.task('build', ['build:html', 'build:css', 'build:js', 'build:img']);

gulp.task('server', () => {
   browsersync(serverConfig);
});

gulp.task('start', ['build', 'server', 'watch']);
