// import commonjs from '@rollup/plugin-commonjs';
// import resolve from '@rollup/plugin-node-resolve';
// import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import typescript from 'rollup-plugin-typescript2';
// import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import pkg from './package.json';

export default {
  input: './src/index.ts',
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],

  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'esm',
    },
  ],
  plugins: [
    // peerDepsExternal(),
    // resolve(),
    // commonjs({
    //   include: ['node_modules/**'],
    // }),
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    typescript({
      // exclude: ['**/*.stories.tsx', '**/*.spec.tsx'],
      // rollupCommonJSResolveHack: true,
      // clean: true,
      // useTsconfigDeclarationDir: true,
    }),
    terser(),
  ],
};
