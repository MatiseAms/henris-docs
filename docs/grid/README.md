# Grid
## The philosophy
Making websites responsive shouldn't be such a tedious task, but it is. We try to make things easier, with our Henri's grid. We have a function and classes you can use.

An important thing to mention is that the designers at Matise design on a 24 column grid layout, it's important that designers and developers are on the same page.

## The function
Since our grid is based on 24 columns we divide the view-width of a page by 24 for our grid-function. This means `grid(24)` is equal to `100vw` and `grid(12)` is equal to `50vw`. It's also possible to add decimals to the grid value.

```scss
height: grid(24); // outputs: height: 100vw;

height: grid(1); // outputs: height: 4.1666666667vw;
```

## The classes
Our grid-classes make developing a responsive website even easier, they are based on percentages and not `vw`.

```html
<div class="column column-12">
	<!-- This div will be 50% of the width of its container element. -->
</div>
<!-- It is also possible to add screen sizes to the classes. -->
<div class="column medium-12 small-full">
	<!-- This div will be 50% of the width of its container element on screens that are medium or larger and 100% of the width on small screens. -->
</div>
```

::: warning
The element has to have a `.column` class.
:::

<GridExample />


## Settings
| Variable | Default value | Description |
|-- |-------------|-- |
| `$grid-columns` | `24` | Amount of columns |
| `$grid-design-width`| `1920px` | Base design width. Used for converting rem to grid size and min/max grid | | size
| `$grid-row-width` | `4096px` | Maximum row width, will be set as max-width for rows. |
| `$grid-breakpoints` | `small` : 750 <br>`medium` : 960<br> `large` : 1280<br> `xlarge` : 1920<br> `xxlarge` : 9999 | Breakpoints used for the grid. All classes will be automatically generated based on | these names and sizes. Do not add classes, this can break many things, changing values is allowed.
| `$grid-parts` | 1/1 : `full`<br> 1/2 : `half`<br> 1/3 : `third`<br> 2/3 : `two-third`<br> 1/4 : `quarter`<br> 3/4 : `three-quarter`<br> 1/5 : `fifth`<br> 2/5 : `two-fifth`<br> 3/5 : `three-fifth`<br> 4/5 : `four-fifth`<br> 1/6 : `sixth`<br> 5/6 : `five-sixth`| Extra breakpoints automatically generates percentages. More can be added easily. |

<script>
export default{
	mounted(){
		console.log(this);
	}
}
</script>

## Responsive classes

Henri's offers a range of responsive media query classes which do what you expect them to do.

### Hide classes
| class | from -- to | 
| --- | --- | 
| `hide-for-xxlarge-up` | 1920 > 9999 |
| `hide-for-xxlarge-only` | 1920 > 9999 |
| `hide-for-xxlarge-down` | < 1920 |
| `hide-for-xlarge-up` | 1280 > |
| `hide-for-xlarge-only` | 1280 > 1920 |
| `hide-for-xlarge-down` | < 1280 |
| `hide-for-large-up` | 960 > |
| `hide-for-large-only` | 960 > 1280 |
| `hide-for-large-down` | < 1280  |
| `hide-for-medium-up` | 750 >  |
| `hide-for-medium-only` | 750 > 960 |  
| `hide-for-medium-down` | < 960 |  
| `hide-for-small`| > 750 |

### Show classes

- show-for-small-only
- show-for-medium-only
- show-for-large-only


Output by default is true. 
