module.exports = {
	head: [
		['link', { rel: 'icon', href: '/logo.png' }],
	],
	title: 'henri\'s',
	themeConfig: {
		navbar: true, 
		sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
					'guide/getting-started', 
					'guide/installation', 
					'guide/code-style'
        ]
      },
      {
        title: 'Documentation',
        collapsable: false,
        children: [
					'doc/color', 
					'doc/grid', 
					'doc/menu', 
					'doc/settings', 
					'doc/output',
					'doc/typography',
					'doc/functions'
        ]
      },
      {
        title: 'Styled',
        collapsable: false,
        children: [
					'doc/buttons', 
					'doc/forms',
					'doc/patterns'
        ]
      }
    ],
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Guide', link: '/guide/' },
			{ text: 'Documentation', link: '/doc/' }
		]
	}
};
