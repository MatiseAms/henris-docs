<template>
	<section>
		<div v-for="func in funcs">
			<h2>{{ func.category.name }}</h2>
			<p>{{ func.category.description }}</p>
			<div class="sub-function" v-for="sub in func.category.subfunctions">
				<h3 :id="sub.name.slice(0, -2)">
					<a :href="`#${sub.name.slice(0, -2)}`" aria-hidden="true" class="header-anchor">#</a>
					{{ sub.name }}
				</h3>
				<p class="return" v-if="sub.return !== ''">return: {{ sub.return }}</p>
				<p class="description">{{ sub.description }}</p>
				<h6>Syntax:</h6>
				<code v-if="sub.syntax">{{ sub.syntax }}</code>
			</div>
		</div>
	</section>
</template>

<script>
import functionData from "./functions.json";

export default {
	data(){
		return{
			funcs: functionData.functions
		}
	},
	mounted(){
		console.log(functionData);
	}
};
</script>

<style lang="scss">
.sub-function{
	margin-top: 2rem;
}
.return {
	font-size: rem(14);
	font-weight: bold;
	margin-top: 0 !important;
}

</style>
