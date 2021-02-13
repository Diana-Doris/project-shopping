<template>
	<view class="writePay">
		<view class="writeMsg">
			<text class="needpay">需付款：￥98</text>  
			<text>剩余：时间</text>
		</view>
		
		<button type="default" @click="payClick">去支付</button>
	</view>
</template>

<script>
	import { mapMutations } from 'vuex'
	import { getCurrentTime } from '@/uni/getCurrentTime/getCurrentTime.js'
	
	export default{
		methods:{
			...mapMutations(['changeHasBeenMade','changeModelPay','changePayComponent','changeDetailObj']),
			payClick(){
				console.log('click')
				setTimeout(()=>{
					this.changeModelPay({
						title:'已经付款',
						iconName:'passed'
					});
					this.changePayComponent(false);
					this.changeDetailObj({
						number:'1122334455',
						payTime:getCurrentTime().str,
						payType:'支付宝',
						transitionTime:getCurrentTime().transitionStr
				})
				},3000)		
			}
		}
	}
</script>

<style lang="scss">
	.writePay{
		position: relative;
		left: 0;
		right: 0;
		width: 100vw;
		text-align: center;
		.needpay{
			margin-right: 15px;
		}
		button{
			background-color: #ff132a;
			color: #fff;
			padding: 0px 20px;
			display: inline-block;
			font-size: 12px;
			border-radius: 23px;
		}
	}
</style>
