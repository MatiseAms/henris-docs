<template>
	<div name="GridExample">
		<h2>Try the grid</h2>
		<div class="example-grid row bg-black" :class="{'center' : centered}">
			<div v-for="n in ( 1 * elements )" :class="['column', 'small-'+ columnClass, n, 'grid-element'] "><p>{{ columnClass }}</p></div>
		</div>

		<div class="settings background--codebgcolor">
			<h4>Grid parts:</h4>
			<form class="row grid-parts" action="index.html" method="post">
				<div class="input-container input-field input--radio" v-for="(gridSize, index) in gridWidths" :key="index">
					<input type="radio" v-model="part" :id="gridSize.name" :ref="gridSize.name" name="part" :calc="gridSize.width" :value="gridSize.name" class="parts">
					<label :for="gridSize.name">
						{{ gridSize.name }}
					</label>
				</div>
			</form>
			<h4>Grid sizes:</h4>
			<div class="range__container">
				<div class="range__numbers row">
					<p>1</p><p>24</p>
				</div>
				<div class="input-field input--range">
					<input class="range__input" type="range" id="try-grid" v-model="range" ref="range" max="24" min="1">
				</div>
			</div>
			<div class="column-count input-field">
				<label for="columnCount">Amount of elements:</label>
				<input id="columnCount" type="number" name="" v-model="elements" ref="elements" min="1">
			</div>
			<div class="input-field input--switch">
				<input type="checkbox" id="center" v-model="centered">
				<label for="center">Centered</label>
			</div>
		</div>
		<h4>Generated code:</h4>
		<div class="language-html">
			<pre class="language-html">
				<code>
{{ generatedHTML }}
				</code>
			</pre>
		</div>
	</div>
</template>

<script>

export default {
	data(){
		return{
			generatedHTML: '',
			columnClass: 24,
			centered: false,
			range: 24,
			part: 'full',
			columnCount: [],
			elements: 4,
			checkedInput: 0,
			gridWidths: [{
				name: 'full',
				width: 1/1
			},{
				name: 'half',
				width: 1/2
			},{
				name: 'third',
				width: 1/3
			},{
				name: 'two-third',
				width: 2/3
			},{
				name: 'quarter',
				width: 1/4
			},{
				name: 'three-quarter',
				width: 3/4
			},{
				name: 'fifth',
				width: 1/5
			},{
				name: 'two-fifth',
				width: 2/5
			},{
				name: 'three-fifth',
				width: 3/5
			},{
				name: 'four-fifth',
				width: 4/5
			},{
				name: 'sixth',
				width: 1/6
			},{
				name: 'five-sixth',
				width: 5/6
			}]
		};
	},
	mounted(){
		this.generateHTML();
	},
	methods: {
		generateHTML: function(sizeClass){
			let self = this;
			let elements = '';
			let rowClass = ''
			for(let i = 0; i < this.elements; i++) {
				elements +=
`\t<div class="column small-${self.columnClass}"></div>\n`;
			};
			if (this.centered){
				rowClass = ' center'
			}
			this.generatedHTML =
`<div class="row${rowClass}">
${elements}
</div>`;

		}
	},
	watch: {
		range: function(){
			let self = this;
			self.gridWidths.forEach(function (size) {
				if((self.range / 24) == size.width) {
					self.part = size.name;
				}
			});
			self.columnClass = self.range;
			this.generateHTML();
		},
		part: function(){
			let self = this;
			self.gridWidths.forEach(function (size) {
				if(self.part == size.name && ((size.width * 24) % 1) == 0){
					self.range = (size.width * 24);
				}
			});
			self.columnClass = self.part;
			console.log(self.columnClass);
			this.generateHTML();
		},
		elements: function(){
			this.generateHTML();
		},
		centered: function(){
			this.generateHTML();
		}
	}
}
</script>

<style lang="scss">
@import '~henris';

.settings{
	padding: 2rem;
}

.range{
	&__container {
		padding: 1rem 0;
	}
	&__numbers{
		display: flex;
		width: 100%;
		justify-content: space-between;
	}
	&__input{
		width: 100%;
	}
}

.input-field, .input-field + .input-field {
	margin-top: .5rem;
}

.grid-parts{
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	max-height: 190px;
	flex-wrap: wrap;
}

.example-grid {
	.grid-element{
		display: flex;
		justify-content: center;
		align-items: center;
		padding: .5rem 0;
		border: color(Black) solid 1px;
		transition: .4s ease-out;
	}
}
</style>
