import gulp        from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', () => (
    runSequence(
        'clean',
        'copy',
        'notes',
        'images',
        'styles-dependencies',
        'styles',
        'scripts-dependencies',
        'scripts',
        'markup'
    )
));
