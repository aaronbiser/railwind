import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'playground/src/component-lib/index.js',
        format: 'esm',
        banner: '/* eslint-disable */',
      },
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'esm' },
    ],
    plugins: [
      del({ targets: ['dist/*', 'playground/src/component-lib'] }),
      typescript(),
      postcss({
        sourceMap: true,
        extract: true,
        minimize: true
      })
    ],
    external: Object.keys(pkg.peerDependencies || {}),
  },
];