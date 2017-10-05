'use strict';

import gulp from 'gulp';
import babel from 'gulp-babel';
import postcss from 'gulp-postcss';
import postcssimport from 'postcss-import';
import sourcemaps from 'gulp-sourcemaps';
import simplevars from 'postcss-simple-vars';
import autoprefixer from 'autoprefixer';
import mixins from 'postcss-mixins';
import nested from 'postcss-nested';
import csso from 'postcss-csso';
import image from 'gulp-image';
import watch from 'gulp-watch';
import browsersync from 'browser-sync';
import concat from 'gulp-concat';
import rigger from 'gulp-rigger';

const path = {

   build: {
      html:   'build/',
      css:    'build/css/',
      js:     'build/js/',
      img:    'build/img/',
      fonts:   'build/fonts/'
   },

   src: {
      html:   'src/*.html',
      css:    'src/css/main.css',
      js:     'src/js/script.js',
      img:    'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*'
   },

   watch: {
      html:   'src/**/*.html',
      css:    'src/css/**/*.css',
      js:     'src/js/**/*.js',
      img:    'src/img/**/*.*',
      fonts: 'src/fonts/**/*.*'
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
      .pipe(rigger())
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
         mixins,
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
    gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/owl.carousel/dist/owl.carousel.min.js',
            path.src.js
        ])
		.pipe(babel({
			presets: ['es2015']
		}))
        .pipe( concat('bundle.js') )
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

gulp.task('build:fonts', () => {
   gulp.src(path.src.fonts)
      .pipe( gulp.dest(path.build.fonts) )
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

   watch([path.watch.fonts], () => {
      gulp.start('build:fonts');
   });
});

gulp.task('build', ['build:html', 'build:css', 'build:js', 'build:img', 'build:fonts']);

gulp.task('server', () => {
   browsersync(serverConfig);
});

gulp.task('start', ['build', 'server', 'watch']);
