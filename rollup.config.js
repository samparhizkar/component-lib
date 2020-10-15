import babel from '@rollup/plugin-babel'
import peerDepsExternal from "rollup-plugin-peer-deps-external";

import commonjs from "@rollup/plugin-commonjs";
import postcss from 'rollup-plugin-postcss'
import {nodeResolve} from "@rollup/plugin-node-resolve";

const packageJson = require("./package.json");

export default {
  input: "src/index.js",
  external: ['axios', 'react', '@material-ui/core','lodash-es'],
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true
    }
  ],
  plugins: [
    postcss(),
    peerDepsExternal(),
    nodeResolve({
      browser: true,
      preferBuiltins: false
    }),
    // resolve(),
    commonjs({
      include: [
        'node_modules/**'
      ],
    }),
    babel({
      extensions: ['.jsx', '.js', '.tsx'],
      exclude: 'node_modules/**'
    }),
    // babel({
    //   exclude: 'node_modules/**',
    //   babelHelpers: 'bundled'
    // }),
    peerDepsExternal()
    // typescript({ useTsconfigDeclarationDir: true })
  ]
};
