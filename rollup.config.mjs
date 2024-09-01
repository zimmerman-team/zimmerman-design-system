import typescript from '@rollup/plugin-typescript';
import dts from "rollup-plugin-dts";
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const config = [
  {
    input: 'src/index.ts',
    output: {
      file: 'dist/zimmerman-DS.js',
      format: 'esm',
      sourcemap: true,
    },
    external: ['react', 'react-dom', '@emotion/react', '@mui/material'],
    plugins: [typescript({ tsconfig: './tsconfig.json' }), nodeResolve(), commonjs(), peerDepsExternal(),]
  }, {
    input: 'dist/types/index.d.ts',
    output: {
      file: 'dist/types/zimmerman-DS.d.ts',
      format: 'es'
    },
    plugins: [dts() ]
  }
];
export default config;