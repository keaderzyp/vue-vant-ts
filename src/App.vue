<template>
	<div id="app">
		<router-view />
	</div>
</template>

<style lang="scss">
	html,body{
		width: 100%;
		height: 100%;
		margin: 0;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
		height: 100%;
	}
	.router-page{
		width: 100%;
		min-height: 100%;
	}
</style>
