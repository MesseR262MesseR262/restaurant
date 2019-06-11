let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin');


gulp.task("autoprefixer", function() {
	return gulp.src("./sass/*.scss")
		.pipe(sass())
		.pipe(autoprefixer({
			overrideBrowserslist: ["last 10 versions"], 
			cascade: false
		}))
		.pipe(gulp.dest("./css"))
})

gulp.task("watch", function() {
	gulp.watch("./sass/*.scss", gulp.parallel(["autoprefixer"]))
})


gulp.task('imagemin', function() {
	return gulp.src('./img/*.png')
		.pipe(imagemin())
		.pipe(gulp.dest('./img'))
})