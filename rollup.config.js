const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify').uglify

const config = {
  input: 'src/index.js',
  output: {
    file: 'dist/funale.js',
    format: 'umd',
    name: 'F',
    exports: 'named',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify()
  )
}

module.exports = config
