import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';import {join} from 'path';
import {TMP_DIR} from '../../config';
import {templateLocals, makeTsProject} from '../../utils';
const plugins = <any>gulpLoadPlugins();

const INLINE_OPTIONS = {
  base: TMP_DIR ,
  useRelativePaths: true,
  removeLineBreaks: true
};

export = () => {
  let tsProject = makeTsProject();
  let src = [
    'typings/browser.d.ts',
    'tools/manual_typings/**/*.d.ts',
    join(TMP_DIR, '**/*.ts'),
    '!' + join(TMP_DIR, '**/*.spec.ts'),
    '!' + join(TMP_DIR, '**/*.e2e.ts')
  ];
  let result = gulp.src(src)
    .pipe(plugins.plumber())
    .pipe(plugins.inlineNg2Template(INLINE_OPTIONS))
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(plugins.template(templateLocals()))
    .pipe(gulp.dest(TMP_DIR));
}
