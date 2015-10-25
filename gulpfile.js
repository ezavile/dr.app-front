var gulp = require('gulp');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var livereload = require('gulp-livereload');

//CSS
var nib = require('nib');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat-css');
var minify = require('gulp-minify-css');

//JS 
var uglify=require('gulp-uglify');
//modules of bower
var browserify=require('browserify'); //hacer funcionar los require del frontend como si fuese backend
var debowerify=require('debowerify');


//JADE
var jade = require('gulp-jade');

//clean
var clean = require('gulp-rimraf');


//Copiar fonts
gulp.task('fonts',function(){
  return gulp.src('./dev/_styl/fonts/*')
  .pipe(gulp.dest('./public/css/fonts'));
});


//borrar la carpeta public cada vez que se corra gulp
gulp.task('clean', function(){
	return gulp.src('./public', {read: false})
	.pipe(clean({force: true}));
});

//js requires
gulp.task('js-vendor', function() {
  return browserify({
    entries: './dev/vendor.js', //punto de entrada js
    transform: debowerify //transformaciones
  })
  .bundle()
  .pipe(source('vendor.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./public/js'))
});

//own js
gulp.task('js', function() {
  return browserify({
    entries: './dev/index.js', //punto de entrada js
  })
  .bundle()
  .pipe(source('app.js'))
  .pipe(buffer())
  .pipe(uglify())
  .pipe(gulp.dest('./public/js'))
  .pipe(livereload())
});

//compila codigo stylus y lo minifica
gulp.task('styl', function() {
  return gulp.src('./dev/_styl/app.styl') 
    .pipe(stylus({ 
      use: nib(),
      'include css': true
    })) 
    .pipe(concat('app.css'))
    .pipe(minify())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload())
})

//compila codigo jade y minifica html
gulp.task('jade', function () {
  return gulp.src('./dev/**/*.jade')
  .pipe(jade({
    //pretty: true
  }))
  .pipe(gulp.dest('./public'))
  .pipe(livereload());
});



//Copiar img
gulp.task('img',function(){
  return gulp.src('./dev/_img/*')
  .pipe(gulp.dest('./public/img'));
});

//observar los cambios y cada cambio borra public
gulp.task('watch', ['clean'], function(){
  livereload.listen()
  gulp.watch('./dev/**/**/**/*.styl', ['styl']);
  gulp.watch('./dev/**/**/**/*.jade', ['jade']);
  gulp.watch('./dev/**/**/**/*.js', ['js']);
  gulp.watch('./dev/_img/*', ['img']);
})

//efectuar tarea - gulp
gulp.task('default', ['watch'], function(){
	gulp.start('js-vendor','js', 'styl', 'jade','fonts', 'img');
})