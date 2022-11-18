const {
	src,
    dest
} = require('gulp');
const include = require('gulp-jade');
const bs = require('browser-sync');

module.exports = function jade() {
    return src('src/**/*.jade')
    .pipe(include({
        pretty: true,
      }))
    .pipe(dest('build'))
    .pipe(bs.stream())
}