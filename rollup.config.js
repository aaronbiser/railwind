import typescript from 'rollup-plugin-typescript2';
import del from 'rollup-plugin-delete';
import pkg from './package.json';
import postcss from 'rollup-plugin-postcss';
import resolve from '@rollup/plugin-node-resolve';

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
      }),
      // https://rollupjs.org/guide/en/#rollupplugin-node-resolve
      resolve()
    ],
    // https://rollupjs.org/guide/en/#peer-dependencies
    external: [
      ...Object.keys(pkg.peerDependencies || {}), 
      'classnames',
      '@bumaga/tabs'
    ],
  },
];