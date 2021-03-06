module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
//	'prettier/@nuxtjs',
//	'eslint:recommended',
//    '@nuxtjs',
    'plugin:nuxt/recommended',
	'plugin:prettier/recommended'
  ],
  plugins: [
	'prettier'
  ],
  // add your custom rules here
  rules: {
	'prettier/prettier': ['error']
  }
}
