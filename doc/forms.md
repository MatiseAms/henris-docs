# Forms

Styling forms can be a lot of work, thats why we made some build in help to do so. By default the styling doesn't come with henris, but you can easily enable one or multiple of these forms to use in your project. 

## Radio

<example>
<div class="input--radio">
	<input id="form-radio" name="form-radio" type="radio" />
	<label for="form-radio">Radio</label>
</div>
<div class="input--radio">
	<input id="form-radio2" name="form-radio" type="radio" />
	<label for="form-radio2">Radio</label>
</div>
</example>

``` html
<div class="input--radio">
	<input id="form-radio" name="form-radio" type="radio" />
	<label for="form-radio">Radio</label>
</div>
```


## Checkbox

<example>
<div class="input-checkbox">
	<input id="form-checkbox" name="form-checkbox" type="checkbox" />
	<label for="form-checkbox">Checkbox</label>
</div>
</example>

``` html
<div class="input-checkbox">
	<input id="form-checkbox" name="form-checkbox" type="checkbox" />
	<label for="form-checkbox">Checkbox</label>
</div>
```


## Switch

The switch is a tiny styled checkbox which you can use for multiple occasions. The switch is disabled by default but can be enabled by adding `@include set-output('form-switch',true);` [output settings](./output.md)

<example>
<div class="input--switch">
	<input id="form-switch" name="form-switch" type="checkbox" />
	<label for="form-switch">Switch</label>
</div>
</example>

``` html
<div class="input--switch">
	<input id="form-switch" name="form-switch" type="checkbox" />
	<label for="form-switch">Switch</label>
</div>
```

## Range

<example>
<div class="input--range">
	<input id="form-range" min="0" max="100" name="form-range" type="range" />
</div>
</example>

``` html
<div class="input--range">
	<input id="form-range" min="0" max="100" name="form-range" type="range" />
</div>
```
