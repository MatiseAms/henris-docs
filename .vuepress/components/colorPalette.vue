<template>
<div class="color-palette">
	{{ colors }}
	
	<div class="color-palette__color" v-for="colorValue, colorName in palette" :style="`--color-bg: ${colorValue}`">
			<div class="color-palette__description" >{{colorName}}<br />{{colorValue}}
				</div>
		
	</div>
	
</div>
</template>

<script>
import axios from "axios";
export default{
	data(){
		return{
			palette: []
		}
	},
	created() {
		console.log('hoiii');
		
    let colorPalette =
			"https://raw.githubusercontent.com/MatiseAms/henris/develop/data/colors-default.json";
			console.log(colorPalette);
    axios({
      url: colorPalette,
      method: "GET"
    }).then(response => {
			console.log(response);
			this.palette = response.data.color.default[0];
			console.log(this.palette);
		});
	}
}

</script>

<style lang="scss">
.color-palette{
	display: grid; 
	grid-template-columns: 50% 50%;
	&__color{
		padding: 0rem; background-color: var(--color-bg);
		position: relative;
	}
	&__description{
		background-color: white; 
		position: relative; top: 0; left: 50%; 
		padding: 2rem;width: 50%;
	}
}
</style>