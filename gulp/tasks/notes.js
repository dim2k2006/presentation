import gulp         from 'gulp';
import settings     from '../settings';

gulp.task('notes', () => {
    return gulp.src(settings.baseSrc + '/bower_components/reveal.js/plugin/notes/**')
        .pipe(gulp.dest(settings.baseDist + '/notes'));
});
