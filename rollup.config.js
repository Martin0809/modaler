import typescript from 'rollup-plugin-typescript2'
import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'

const renderConfig = (dir, format) => ({
  input: 'src/index.tsx',
  output: {
    dir,
    format,
    sourcemap: true,
  },
  external: ['react', 'react-dom'],
  plugins: [typescript(), babel(), commonjs()],
})

export default [renderConfig('lib', 'cjs'), renderConfig('es', 'es')]
