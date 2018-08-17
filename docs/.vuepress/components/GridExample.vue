<template>
	<div name="GridExample">
		<h2>Try the grid</h2>
		<div class="settings">
			<p>Grid sizes:</p>
			<div class="range__container">
				<div class="range__numbers row">
					<p>1</p><p>24</p>
				</div>
				<div class="input-field input--range">
					<input class="range__input" type="range" id="try-grid" @input="changeGrid('range')" ref="range" max="24" min="1">
				</div>
			</div>
			<p>Grid parts:</p>
			<form class="row grid-parts" action="index.html" method="post">
				<div class="input-container input-field input--radio" v-for="(gridSize, index) in gridWidths" :key="index">
					<input type="radio" @input="changeGrid(gridSize.name, gridSize.width)" :id="gridSize.name" :ref="gridSize.name" name="part" :calc="gridSize.width" :value="gridSize.name" class="parts" :checked="checkedInput == index">
					<label :for="gridSize.name">
						{{ gridSize.name }}
					</label>
				</div>
			</form>
			<div class="column-count input-field">
				<label for="columnCount">Amount of elements:</label>
				<input id="columnCount" type="number" name="" @input="changeElements('elements')" :value="elements" ref="elements" min="1">
			</div>
		</div>

		<div class="example-grid row bg-black">
			<div v-for="n in ( 1 * elements )" :class="['column', 'small-'+input, n, 'bg-white grid-element'] "><p>{{ input }}</p></div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		return{
			input: 24,
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
	methods: {
		changeGrid: function (el, calc) {
			let value = this.$refs[el].value;
			let self = this;
			let count = 0;


			if (value == undefined ) {
				value = el;
				if (((calc * 24) % 1) == 0){
					this.$refs.range.value = calc * 24;
				}
			} else {
				this.gridWidths.forEach(function(size) {
					count++;
					if (size.width == value / 24) {
						self.checkedInput = count - 1;
					} else {
						self.checkedInput = false;
					}
				})
			}

			this.input = value;
		},
		changeElements: function (el) {
			let value = this.$refs[el].value;
			this.elements = value;
		}
	},
	watch: {
		checkgrid: function(){
			console.log('');
		}
	}
}
</script>

<style lang="scss">
@import '~henris';

.settings{
	background-color: color(Purple, .3);
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

.grid-parts{
	padding: 1rem 0;
	display: flex;
	flex-direction: column;
	max-height: 190px;
	flex-wrap: wrap;
}

.example-grid {
	.grid-element{
		padding: 1rem;
		box-sizing: border-box;
		border: color(Black) solid 1px;
		transition: .4s ease-out;
	}
}
</style>
