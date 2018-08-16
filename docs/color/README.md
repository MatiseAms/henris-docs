# Color

## The philosophy
Henri's comes with two [predefined color sets](#default-color-sets); `default` and `social`. All colors are easy to change, extend, or overwrite with another colorset. Normally colors are defined as variables in SCSS, we decided that a color function is much more powerful.


## The function
The basic function to show a color is `color(Red)`, but in Henri's it's also possible to use it to define the opacity or use another color set.

```scss
// Standard function:
background-color: color(Red); // outputs: background-color: #eb0f33;

// Using the opacity property:
background-color: color(Red, 0.5); // outputs: background-color: rgba(235, 15, 51, 0.5);

// Using a different color set:
background-color: color(Red, 1, "vibrant"); // outputs: background-color: #fe5165;
```

## Add your own
Add your own color set by passing a map. Colors should not have the same name as existing [html color names](https://www.w3schools.com/colors/colors_names.asp), you can only use them if you capitalize them.
```scss
// To create a new color set and overwrite the default at the same time:
$default-color-set: (
	"Black": #111111,
	"White": #f7f7f7,
	"myBlue": #181160,
	"fireRed": #ed1f35
);
// NB The new default color set has to at least contain Black and White.

// Choose a unique variable name to create a new color set:
$custom-colors: (
	"Black": #111111,
	"White": #f7f7f7,
	"myBlue": #181160,
	"fireRed": #ed1f35
);

```


## Overwrite
To overwrite the default color set and add your own:
```scss
$default-color-set: "vibrant";
```
::: tip
Include this before the import of `@import '~henris'`
:::


### Default color sets

```scss
$color-default: (
	"Black": #101010,
	"Dark": #303030,
	"White": #ffffff,
	"Offwhite": #f7f7f7,
	"Gray": #7f7f7f,
	"Green": #10c565,
	"Blue": #1eb3e0,
	"Red": #eb0f33,
	"Brown": #aa834f,
	"Yellow": #f5c505,
	"Orange": #f6790b,
	"Pink": #ca1387,
	"Purple": #7329b1,
	"Turquoise": #3feac3
) !default; //

$color-social: (
	"dribbble": #ea4c89,
	"facebook": #3b5998,
	"flickr": #ff0084,
	"foursquare": #0072b1,
	"git": #0f0d0e,
	"googleplus": #dd4b39,
	"twitter": #00aced,
	"linkedin": #007bb6,
	"instagram": #517fa4,
	"pinterest": #cb2027,
	"skype": #12a5f4,
	"snapchat": #fffc00,
	"soundcloud": #ff7700,
	"spotify": #2ebd59,
	"tumblr": #32506d,
	"vimeo": #aad450,
	"vine": #00bf8f,
	"vkontakte": #45668e,
	"youtube": #bb0000,
	"wordpress": #21759b
) !default; //
```
