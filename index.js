import postcssSyntax from "postcss-styled-syntax";

export default {
	extends: "stylelint-config-standard",
	customSyntax: postcssSyntax,
	overrides: [{ files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"] }],
	plugins: ["stylelint-no-unsupported-browser-features"],
	rules: {
		"no-empty-source": null,
		"block-no-empty": null,
		"media-query-no-invalid": null,
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
