const path = require('path');
const { defineConfig } = require('vite');

module.exports = defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Bigbro',
      fileName: (format) => `bigbro.${format}.js`,
    },
  },
});
