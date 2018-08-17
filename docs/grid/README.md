# Grid
## The filosophy
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
