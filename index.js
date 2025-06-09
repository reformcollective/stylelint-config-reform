module.exports = {
	extends: "stylelint-config-standard",
	customSyntax: "postcss-styled-syntax",
	overrides: [{ files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"] }],
	plugins: [
		"stylelint-no-unsupported-browser-features",
		"stylelint-plugin-use-baseline",
	],
	rules: {
		"no-empty-source": null,
		"block-no-empty": null,
		"selector-type-no-unknown": null,
		"media-query-no-invalid": null,
		"media-feature-range-notation": null,
		"custom-property-empty-line-before": null,
		"plugin/no-unsupported-browser-features": [
			true,
			{
				severity: "warning",
				ignore: ["css-nesting", "css3-cursors"],
				ignorePartialSupport: true,
			},
		],
	},
};
