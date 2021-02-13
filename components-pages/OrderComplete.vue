<template>	
	<view class="content">		
		<view class="title">
			<view class="img">
				<image src="../static/q1.jpg" mode=""></image>
			</view>
			<text>{{ msgObj.title }}</text>			
		</view>
		
		<view class="goods-msg">
			<image src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3456825387,270175843&fm=26&gp=0.jpg" mode=""></image>
			<view class="order-goods-msg">
				<view class="text">
					<p>{{ msgObj.subTitle }}</p>
					<view>
						有效期：
						<span>{{ msgObj.validTerm }}</span>
					</view>
				</view>		
				<view class="money">
					￥<text>{{ msgObj.sumMoney }}</text>
				</view>
			</view>
		</view>
		
		<view class="order-msg">
			<view class="money">
				<view>课程总价：</view>
				<view>￥{{ msgObj.sumMoney }}</view>
			</view>
			<view class="money">
				<view>邮费：</view>
				<view>￥{{ msgObj.postMoney }}</view>
			</view>
			<view class="money">
				<view>优惠：</view>
				<view>￥{{ msgObj.discountMoney }}</view>
			</view>
			<view class="money blackfont">
				<view>实付：</view>
				<view>￥{{ money }}</view>
			</view>
		</view>		
		
	</view>		
		
</template>

<script>
	import { mapMutations } from 'vuex'	
	
	export default{		
		created() {			
			 setTimeout(()=>{
				 console.log('ready')
				 this.changeGoodsObj({
					 ...this.msgObj,
					 moeny:this.money,
					});
					this.changePayComponent(true);
					this.changeDetailObj({
						number:'1122334455',
						payType:'在线支付'
					});
					this.changeModelPay({
						title:'待支付',
						iconName:'underway-o'
					})
			 },5000)
		},
		methods:{
			...mapMutations(['changeGoodsObj','changePayComponent','changeDetailObj','changeModelPay'])
		},
		computed:{
			money(){
				let {sumMoney,postMoney,discountMoney} = this.msgObj;
				return sumMoney - discountMoney + postMoney
			}
		},
		data() {
			return {
				msgObj:{
					title:'孙教授',
					subTitle:'中国近代史纲要，淮安中学知名孙大宝教授亲自授课',
					validTerm:'永久有效',
					sumMoney:98,
					postMoney:0.00,
					discountMoney:0.00
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.content{
		background-color: #fff;
		padding: 10px;
		margin-bottom: 10px;
		.title{
			display: flex;
			font-size: 12px;
			.img{
				width: 20px;
				height: 20px;
				border-radius: 50%;
				overflow: hidden;
				margin-right: 5px;
				image{
					width: 20px;
					height: 20px;
				}
			}
		}		
		.goods-msg{
			display: flex;
			font-size: 12px;	
					padding-bottom: 10px;
			image{
				width: 220px;
				height: 60px;
				border-radius: 5px;
			}
			.order-goods-msg{
				display: flex;
				justify-content: space-between;	
				align-items: center;
				image{
					width: 220px;
					height: 60px;
					border-radius: 5px;
				}
				.text{
					margin-left: 10px;
					p{
						font-size: 12px;
						line-height: 15px;
						color: #101010;
					}
					view{
						font-size: 10px;
						color: #737374;	
					}
				}
			}
		}
		.order-msg{
			font-size: 10px;
			color: #737374;	
			.money{
				display: flex;
				justify-content: space-between;
				&.blackfont{
					color: #000;
				}
			}
		}
		
	}
</style>
