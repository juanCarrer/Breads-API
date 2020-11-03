module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es2021: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 12,
	},
	rules: {
		'linebreak-style': 'off',
		semi: 'off',
		'no-console': 'off',
		'no-tabs': 'off',
		indent: ['error', 'tab'],
		'class-methods-use-this': 'off',
		'no-async-promise-executor': 'off',
	},
};
