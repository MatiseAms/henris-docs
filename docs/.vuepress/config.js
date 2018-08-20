

module.exports = {
	title: "Henri's docs",
	home: true,
	description: "Documentation for the henri's package.",
	head: [
		['link', { rel: 'icon', href: `/media/img/favicon.png` }],
	],
	themeConfig: {
		repo: "matiseams/henris-docs",
		editLinks: true,
		docsDir: "docs",
		lastUpdated: "Last Updated",
		editLinkText: "Edit this page on GitHub",
		nav: [{ text: "Matise", link: "https://www.matise.nl" }],
		sidebar: [
			["/introduction/", "Introduction"],
			["/getting-started/", "Getting started"],
			["/typography/", "Typography"],
			["/color/", "Color"],
			["/grid/", "Grid"],
			["/output/", "Output"],
			["/functions/", "Functions"]
		]
	},
	configureWebpack: {
		resolve: {
			alias: {
				"@media-json": "media/json/"
			}
		}
	}
};
