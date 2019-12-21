const resolve = require('rollup-plugin-node-resolve')
const babel = require('rollup-plugin-babel')
const uglify = require('rollup-plugin-uglify').uglify

const config = {
  input: 'src/index.js',
  output: [
    {
    file: 'dist/funale.umd.js',
    format: 'umd',
    name: 'F',
    exports: 'named',
  },
],
  plugins: [
    resolve(),
    babel({ presets: [['@babel/preset-env', { targets: { ie: '11' } }]] }),
  ],
}

if (process.env.NODE_ENV === 'production') {
  config.plugins.push(
    uglify({
      compress: {
        pure_getters: true,
        unsafe: true,
        unsafe_comps: true,
      },
      warnings: false,
    })
  )
}

module.exports = config
