var gulp   = require('gulp'); 
var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 

gulp.task('scripts', function() {
	gulp.src(['./public/js/components/*.js'])
	.pipe(concat('components.min.js'))
	.pipe(uglify())
	.pipe(gulp.dest('./public/js/'))
});


gulp.task('watch', function(){
	gulp.watch('./public/js/components/*.js', ['scripts']); 
}); 

gulp.task('default', ['watch', 'scripts'] ); 