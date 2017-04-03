const browserSync = require('browser-sync');
const childProcess = require('child_process');
const gulp = require('gulp');
const gulpUtil = require('gulp-util');

const postcss = require('gulp-postcss');
const cssImport = require('postcss-import');
const nest = require('postcss-nested');
const customProps = require('postcss-custom-properties');
const calc = require('postcss-calc');
const nano = require('gulp-cssnano');


// Build jekyll project
gulp.task('jekyll', done => {
  gulpUtil.log("process-platform : " + process.platform);
  
  var isWin = /^win/.test(process.platform);
  var execScript;
  
  if (isWin){
	  execScript = "jekyll.bat";
  }else{
	  execScript = "jekyll";
	  
  }
  
  gulpUtil.log("jekyll script : " + execScript);
  
  childProcess.spawn(execScript, ['build', '--drafts', '--future'], { stdio: 'inherit' }).on('close', done);
});

// Rebuild and refresh project
gulp.task('reload', ['jekyll'], () => {
  browserSync.reload();
});

// Start BrowserSync server and serve _site directory
gulp.task('browser-sync', ['styles', 'jekyll'], () => {
  browserSync.init({
    ui: false,
    ghostMode: {
      clicks: true,
      forms: false,
      scroll: true
    },
    logPrefix: 'dreamcaster',
    notify: false,
    // port: 4000,
    server: {
      baseDir: '_site'
    }
  });
  
  gulp.watch('_src/css/**/*.css', ['styles', 'reload']);
  gulp.watch(['index.html', 'docs/_layouts/*.html', 'docs/_includes/*.html', 'docs/_posts/*', 'docs/_drafts/*', 'docs/*.md'], ['reload']);

});

// Process css, autoprefix, minify
gulp.task('styles', () => {
  const processors = [
    cssImport,
    customProps,
    calc,
    nest
  ];
  return gulp.src('_src/css/main.css')
    .pipe(postcss(processors))
    .pipe(nano({
          //the following option is for :CSS3 Animation is missing after minify
          reduceIdents: {
              keyframes: false
          },
          discardUnused: {
              keyframes: false
          }
          })
    )
    .pipe(gulp.dest('_includes/css'));
});

// Watch sass and all html posts
gulp.task('watch', () => {
  gulp.watch('_src/css/**/*.css', ['styles', 'reload']);
  gulp.watch(['index.html', '_layouts/*.html', '_includes/*.html', '_posts/*', '_drafts/*', '*.md'], ['reload']);
});

// default task
gulp.task('default', ['styles', 'watch']);
