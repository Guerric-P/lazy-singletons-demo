var rollup = require('rollup');
var babel = require('rollup-plugin-babel');

rollup.rollup({
  input: 'src/main.js',
  plugins: [babel({
    exclude: 'node_modules/**'
  })]
}).then(function (bundle) {
  bundle.write({
    file: 'build/bundle.js',
    format: 'iife'
  });
});
