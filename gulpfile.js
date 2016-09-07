var fs         = require("fs")
var browserify = require('browserify')
var vueify     = require('vueify')
var gulp       = require('gulp'); 

// apply custom config
vueify.compiler.applyConfig({
  // ...same as in vue.config.js
})


gulp.task('script', function(){
	browserify('./views/main.js')
	.transform(vueify)
	.bundle()
	.pipe(fs.createWriteStream("./public/js/bundle.js")); 
}); 

gulp.task('watch', function(){
	gulp.watch('./views/*', ['script']); 
	gulp.watch('./views/components/*', ['script']); 
}); 

gulp.task('default', ['watch', 'script']); 