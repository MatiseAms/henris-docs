<template>
	<section class="all__functions">
		<div class="category" v-for="func in funcs">
			<h2>{{ func.category.name }}</h2>
			<p>{{ func.category.description }}</p>
			<div class="sub-function" v-for="sub in func.category.subfunctions">
				<h3 :id="sub.name.slice(0, -2)" class="text--purple">
					<a :href="`#${sub.name.slice(0, -2)}`" aria-hidden="true" class="header-anchor">#</a>
					{{ sub.name }}
				</h3>
				<p class="return" v-if="sub.return !== ''">return: {{ sub.return }}</p>
				<p class="description">{{ sub.description }}</p>
				<div class="syntax" v-if="sub.syntax">
					<p><span class="syntax__title">Syntax:</span> <code v-if="sub.syntax">{{ sub.syntax }}</code></p>
				</div>
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
@import '~henris';
.category {
	margin-top: 2rem;
}

.sub-function{
	margin-top: 2rem;
}
.return, .syntax p{
	font-size: rem(14);
	font-weight: bold;
	margin-top: 0 !important;
}

.syntax {
	margin-top: rem(10);
}
</style>
