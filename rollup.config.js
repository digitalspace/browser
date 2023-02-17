import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'dist/es2015/index.js',
  plugins: [
    resolve(),
  ],
  output: {
    format: 'umd',
    name: 'ZXingBrowser',
    sourcemap: true,
    file: 'dist/umd/digitalspace-browser.js'
  },
};
