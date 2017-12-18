<template>
  <div id="app">
  <!-- the router outlet, where all matched components would ber viewed -->
  <div class="row">
			<div class="column medium-12" style="text-align:center">
				<img src="images/PathfinderRPGLogo_500.jpeg">
			</div>
		</div>
  <router-link v-bind:to="'/'" class="button">Home</router-link>
  
  <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app'
}
</script>
<!-- styling for the component -->
<style>


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>