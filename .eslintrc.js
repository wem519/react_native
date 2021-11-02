module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'eslint:reccomended'],
  parser: '@typescript-eslint/parser',
  Plugins: ['react', '@typescript-eslint'],
};
