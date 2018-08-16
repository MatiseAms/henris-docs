# Typography

## Defining fonts

Include or define up to 4 fonts.

| Font | Variable|
| -- | -- |
| 1st | $font-primary |
| 2nd | $font-secondary |
| 3rd | $font-tertiary |
| 4th | $font-quaternary |


## Settings

| Property | Default value | Example | Type |
|--|--|--|--|
| `font-family`* | `null`| `"Graphik", sans-serif` | string |
| `load` | `false` | `true` | boolean |
| `weights` | `()` | `('light': 200, 'Regular': 400 )` | map |
| `path` | `"/fonts"` | `"/assets/fonts"` | string |
| `files` | `"woff2", "woff", "ttf", "eot"` | | list |
| `use` | `()` | `('h1','.title','blockquote')` | list |
| `types` | `('normal')` | `('normal','italic')` | list |

\* is required


## Example

::: warning
The `use` & `types` properties are unfortunately not working yet, you'll have to make a file where you define the font-families & -types for your elements the old fashioned way.
:::

```scss
$font-primary: (
	font-family: (
		Graphik,
		sans-serif
	),
	load: true,
	weights: (
		"Light": 100,
		"Regular": 400,
		"Medium": 500,
		"Bold": 600,
		"Black": 800
	),
	path: "/fonts",
	files: (
		"woff2",
		"woff",
		"ttf",
		"eot"
	),
	use: (
		"h1",
		"h3",
		"h4",
		"span.text",
		"#section"
	),
	types: (
		"normal",
		"italic"
	)
);
```
::: tip
- Font weights need to be set in order to load fonts.
- Font weight names must be identical to actual file names.
- The first entry in font-family will be loaded when loaded is true.
- The space in a font-family name will be removed for the file name. `Helvetica Neue` will be `HelveticaNeue`
- Font includes uses the following syntax: `fontFamily-fontWeightName.ttf`
- When font-type `"italic"` is added, the file name should be `fontFamily-fontWeightNameItalic.ttf`
:::
