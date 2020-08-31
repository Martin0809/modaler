import typescript from 'rollup-plugin-typescript2'
import babel from 'rollup-plugin-babel'

export default {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.js',
    format: 'cjs',
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [typescript(), babel()],
}
