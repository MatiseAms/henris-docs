

module.exports = {
	title: "Henri's docs",
	home: true,
	description: "Documentation for the henri's package.",
	themeConfig: {
		logo: '/media/img/henris.svg',
		repo: "matiseams/henris-docs",
		editLinks: true,
		docsDir: "docs",
		lastUpdated: "Last Updated",
		editLinkText: "Edit this page on GitHub",
		nav: [{ text: "Matise", link: "https://www.matise.nl" }],
		sidebar: [
			["/getting-started/", "Getting started"],
			["/typography/", "Typography"],
			["/color/", "Color"],
			["/grid/", "Grid"],
			["/output/", "Output"]
		]
	},
	configureWebpack: {
		resolve: {
			alias: {
				"@media-img": "media/img/"
			}
		}
	}
};
