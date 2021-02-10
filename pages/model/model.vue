<template>
	<view class="model">
		<!-- 导航 -->
		<view class="nav">
			<van-icon name="arrow-left" @click="pageBack"/>
			<text>{{ dataUpdated }}</text>
		</view>
		
		<!-- 插槽 -->
		<view class="content-msg">
			<slot></slot>
		</view>
	</view>
</template>

<script>
	export default{
		props:['dataUpdated'],
		methods:{
			pageBack(){
				console.log('back')
				uni.navigateBack({
				    delta: 1,
				    animationType: 'pop-out',
				    animationDuration: 200
				});
			}
		}		
	}
</script>

<style lang="less" scoped>
	.model {	
		background-color: #eee;
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		width: 100vw;	
		height: 100vh;
		font-size: 14px;
		line-height: 24px;
		.nav{
			background-color: #fff;
			width: 100vw;
			font-size: 16px;
			padding: 30px 10px 10px;
			display: flex;
			align-items: center;
		}
		.content-msg{
			padding:5px 10px;
			font-size: 12px;
			color: #000000;
			font-family: Arial, Helvetica, sans-serif;
		}
	}
</style>
