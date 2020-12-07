<template>
	<view>
		<text>{{name}}</text>
	</view>
</template>

<script>
export default{
	name: "index",
	data() {
		return {
		   name: "首页"
		}
	},
	methods:{
		
	},
	mounted() {
		console.log('mounted')
	}
		
}
</script>

<style>
</style>
