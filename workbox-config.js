module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{JPG,webp,png,html,js,json,css}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};