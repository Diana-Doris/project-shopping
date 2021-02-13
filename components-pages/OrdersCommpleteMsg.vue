<template>
	<view class="order-detail">
		<view class="order-title">
			订单信息
		</view>
		
		<view class="msg-content">
			<view v-show="detailObj.number">
				<text>订单编号：</text>
				<text class="number">{{ detailObj.number }}</text>
				<text class="red">复制</text>
			</view>
			<view v-show="detailObj.payTime">
				<text>付款时间：</text>
				<text>{{ detailObj.payTime }}</text>
			</view>
			<view v-show="detailObj.payType">
				<text>支付方式：</text>
				<text>{{ detailObj.payType }}</text>
			</view>
			<view v-show="detailObj.transitionTime">
				<text>成交时间：</text>
				<text>{{ detailObj.transitionTime }}</text>			
			</view>	
		</view>
	</view>
</template>

<script>
	import { mapMutations,mapState } from 'vuex'
	import { getCurrentTime } from '@/uni/getCurrentTime/getCurrentTime.js'
	
	export default{
		created() {
			setTimeout(()=>{
				this.changeDetailObj({
					number:'1122334455',
					payTime:getCurrentTime().str,
					payType:'支付宝',
					transitionTime:getCurrentTime().transitionStr
				})
			})
		},
		data() {
			return {
				
			}
		},
		methods:{
			...mapMutations(['changeDetailObj'])
		},
		computed:{
			...mapState({
				detailObj:(state)=>(state.detailObj)
			})
		}
	}
</script>

<style lang="scss">
	.order-detail{
		padding: 10px;
		background-color: #fff;
		.order-title{
			font-size: 14px;
		}
		.msg-content{
			.number{
				margin-right: 10px;
			}
			.red{
				color: red;
			}
		}
	}
</style>
