# Menu

## the mixin

```html
// Create a menu trigger, make sure the main (clickable) element has child element for the burger, otherwise it will get hard to click
<button class="menu_trigger">
	<span></span>
</button>
```

```scss
// Style the trigger, give it a width, height and bg.. to make it good clickable
.menu_trigger{
	
	// Add the hamburger to the click
	span{
		@include menu(;
		// Default arguments in this order: $width: 1.5rem, $height: rem(2), $gutter: rem(5), $color: white, $round: 0, $transition-duration: 0.3s
	}

	// Set a class on the trigger when the menu is active
	&.is-active{
		
		// And add @include menu-close to give the menu a cross. 
		span{
			@include menu-close();
		}
	}
}
```
