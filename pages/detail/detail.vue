<template>
		<model :dataUpdated="dataUpdated">
			<view class="content-area">
				<!-- 系统处理 -->
				<view class="system-deal" v-show="returnData">
					<text>请等待系统处理</text>
					<view class="write-time">
						<view class="plus">还剩</view>
						<van-count-down class="timer-machine" :time="time" use-slot @change="onChange">
							<text class="item">{{ timeData.hours }}时</text>
							<text class="item">{{ timeData.minutes }}分</text>
							<text class="item">{{ timeData.seconds }}秒</text>
						</van-count-down>
					</view>
				</view>
				
				<!-- 等待处理 -->
				<view class="waite-deal" v-show="returnData">
					<text>您已成功发起退款申请，请耐心等待商家处理</text>
					<view class="tips">
						<view class="item">若退款专员同意或超时处理，系统将退款给您</view>
						<view class="item">如果系统拒绝，您可以根据原因修改退款申请后，再次发起，系统会重新处理</view>
					</view>
				</view>
				
				<!-- 成功  and  失败界面 -->
				<view class="ok-fail" v-show="!returnData">
					
					<text>{{ returnDataDetail.resState }}</text>
					<!-- 成功 -->
					<view class="return-State" v-if="!returnData && returnDataDetail.resState === '退款成功'">
						<view class="type">
							<text>退款金额：</text>
							<text>{{ returnDataDetail.money }}</text>
						</view>
						<view class="money">
							<text>返回支付宝 ：</text>
							<text>{{ returnDataDetail.money }}</text>
						</view>
						<view class="timer">
							<text>时间：</text>
							<text>{{ detailTime }}</text>
						</view>
					</view>
					<!-- 失败 -->
					<view class="return-State" v-else>
						<view class="reason">
							<text>原因：</text>
							<text>商家拒绝退款</text>
						</view>
						<view class="money">
							<text>退款金额：</text>
							<text>0</text>
						</view>
					</view>
					
				</view>
				
				<!-- 退款记录 -->
				<view class="order-recode">
					<text>退款记录</text>
					<van-icon name="arrow" @click="recodeClick"/>
				</view>
				
				<!-- 	退款信息 -->
				<view class="order-msg">
					<order-msg :returnDataDetail="returnDataDetail"/>				
				</view>
				
				<!-- 底部button -->
				<view class="footer-button">
					<button type="default" class="edit-submit btn" v-show="returnData" @click="backPage">修改申请</button>
					<button type="default" class="del-submit btn" v-show="returnData" @click="cancleApplication">撤销申请</button>
					<button type="default" class="del-submit btn" v-show="!returnData && returnDataDetail.resState === '退款失败'" @click="orderPage">申诉</button>
				</view>	
				
			</view>
		</model>
</template>

<script>
	import orderMsg from '@/components-pages/OrdersMsg.vue'
	import model from '@/pages/model/model.vue'
	import {getCurrentTime} from '@/uni/getCurrentTime/getCurrentTime.js';
	import { mapMutations } from 'vuex'
	
	export default{
		onReady() {
			this.returnDataDetail = this.$store.state.userMsg[0];
			this.changeReturnMsg({
				username:'退款专员',
				src:'../../static/logo.png',
				reason:'正在审核订单',
				resState:'',
				submitTime:getCurrentTime().str,
				getTimer:getCurrentTime().timer
			})
			setTimeout(()=>{
				let stateMsg = this.$store.state.userMsg[0].resState
				if(stateMsg){
					this.returnData = false;
					this.detailTime = getCurrentTime().str;
					this.changeReturnMsg({
						username:'退款专员',
						src:'../../static/logo.png',
						reason:stateMsg === '退款成功' ? stateMsg : stateMsg +'原因'+'商家拒绝',
						resState:'',
						submitTime:getCurrentTime().str,
						getTimer:getCurrentTime().timer
					})
				}
			},6000)
		},
		components:{
			orderMsg,
			model
		},
		data() {
			return {
				returnMsgPerson:{},
				detailTime:null,
				returnData:true,
				returnDataDetail:{},
				time: 12 * 60 * 60 * 60 * 1000,
				timeData: {},
				dataUpdated:'退款详情'
			}
		},		
		methods:{
			...mapMutations(['changeReturnMsg','changeSystemMsg','changeUserName']),
			cancleApplication(){
				uni.navigateTo({
					url:'../index/index'
				})
			},
			backPage(){
				this.pageBack()
			},
			orderPage(){
				console.log('申诉');
				this.changeUserName({
						username:'陈佳欣',
						src:'../../static/q3.jpg',
						reason:'提出申诉由系统介入审核',
						resState:'',
						submitTime:getCurrentTime().str,
						getTimer:getCurrentTime().timer
					})
				this.changeReturnMsg({
						username:'系统',
						src:'../../static/w3.jpg',
						reason:'同意退款申请，退款金额将返回原处',
						resState:'退款成功',
						submitTime:getCurrentTime().str,
						getTimer:getCurrentTime().timer
					})
				uni.navigateTo({
					url:'../index/index?titleNav=申诉'
				})
			},
			onChange(e){
				this.timeData = e.detail
			},
			recodeClick(){
				uni.navigateTo({
					url:'../record/record'
				})
			},
			
		}
	}
</script>

<style lang="less" scoped>
		.content-area{
			padding:5px 10px;
			font-size: 12px;
			color: #000000;
			font-family: Arial, Helvetica, sans-serif;
			.system-deal{
				padding: 10px;
				.write-time{
					display: flex;
					align-content: center;					
					font-size: 10px;
					color: #404040;
					line-height: 24px;
					margin-top: -8px;
					.timer-machine{
						.item{
							font-size: 10px;
						}
					}
				}
			}
			.waite-deal{
				padding: 5px 10px;
				background: #fff;
			}
			.ok-fail{
				padding: 5px 10px;
				background-color: #fff;
				margin-bottom: 10px;
				.return-State{
					font-size: 10px;			
					text{
						margin-left: 3px;
					}			
				}
			}
			
		}
		.waite-deal{
			margin-bottom: 10px;
			.tips{
				font-size: 8px;
				line-height: 15px;
				color: #8a8a8a;
				position: relative;
				.item{
					position: relative;
					padding-left: 4px;
					&::before{
						content: '';
						position: absolute;
						left: 0;
						top: 6px;
						width: 2px;
						height: 2px;
						border-radius: 50%;
						background-color: #8a8a8a;
					}
				}
			}			
		}		
		.order-recode{
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			padding:5px 10px;
			margin-bottom: 10px;
		}
		.order-msg{
			background-color: #fff;
			padding: 5px 10px;
		}
		.footer-button{
			position: absolute;
			bottom: 10px;
			right: 10px;
			display: flex;
			.btn{
				height: 23px;
				border-radius: 10px;
				border:1px solid #e22034;
				display: inline;
				font-size: 12px;
				line-height: 23px;
				margin-left: 10px;
			}
			.edit-submit{
				background-color: #fff;
				color: #e22034;
			}
			.del-submit{
				background-color: #e22034;
				color: #fff;
			}
		}
		
</style>
