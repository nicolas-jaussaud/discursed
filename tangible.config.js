module.exports = {
  build: [
    {
      src: './src/index.js',
      dest: './build/discursed.min.js',
      watch: './src/**',
      react: 'react'
    },
  ],
  serve: {
    dir: '.',
    port: 4143
  }
}
