<template>
	<view class="container">
		<!-- 导航区 -->
		<view class="nav" >
			<van-icon name="arrow-left" @click="returnBack"/>
			<text>{{ titleName==='申诉' ? titleName : '申请退款' }}</text>
		</view>
		
		<!-- 申诉成功 -->
		<view class="success" v-show="!showAppeal">
			申诉成功.....
		</view>
		
		<!-- 退款项目 -->
		<view class="project" v-show="showAppeal">
			<goods-content/>
		</view>
		<!-- 退款信息 -->
		<view class="msg" v-show="showAppeal">
			<goods-msg :typeShow="typeShow" :typeName="typeName" @showbottom="showbottom" @subSelect="subSelect" @radioClick="radioClick"/>
		</view>
		<!-- 退款原因 -->
		<view class="reason" v-show="showAppeal" >
			<goods-reason @getMsg="getData"/>
		</view>
		<!-- 提交 -->
		<view class="submit" v-show="showAppeal">
			<van-button type="danger" block round="true" size="mini" @click="submit">提交</van-button>
		</view>
		
	</view>
</template>

<script>
	import {dealResult} from '@/uni/returnResult/orderResult.js';
	import { mapMutations } from 'vuex'
	import {getCurrentTime} from '@/uni/getCurrentTime/getCurrentTime.js';	
	import GoodsContent from '@/components-pages/GoodsContent.vue'; 
	import GoodsMsg from '@/components-pages/GoodsMsg.vue';
	import GoodsReason from '@/components-pages/GoodsReason.vue';
	
	export default {
		onLoad(options) {
			this.titleName = options.titleNav;
		},
		components:{			
			GoodsContent,
			GoodsMsg,
			GoodsReason,			
		},
		data() {
			return {
				titleName:null,
				typeShow: false,
				typeName:'请选择',
				href: 'https://uniapp.dcloud.io/component/README?id=uniui',				
				obj:null,
				jumpData:null,
				showAppeal:true,
				userMsg:{
					username:'陈佳欣',
					src:'../../static/q3.jpg',
					reason:null,
				}
			}
		},
		methods: {
			returnBack(){
				uni.navigateBack({
				    delta: 1,
				    animationType: 'pop-out',
				    animationDuration: 200
				});
			},
			...mapMutations(['changeUserName']),
			getData(val){
				this.userMsg.reason = val;
			},
			submit(){				
				if(!this.typeShow && this.typeName !== '请选择' && this.titleName !== '申诉'){
					dealResult().then(res=>{
						let str = '';
						this.obj = {
							...this.userMsg,
							resState:res,
							submitTime:getCurrentTime().str,
							getTimer:getCurrentTime().timer
						};
						console.log(res)
						this.changeUserName(this.obj);
						for (let prop in this.obj) {
							str += prop + '=' + this.obj[prop] + '&';
						}
						uni.navigateTo({
							url:'../detail/detail',
						})	
					});									
				}
				
				if(this.titleName === '申诉'){
					this.showAppeal = false;
				}
			},
			radioClick(val){
				console.log(val)
				this.obj = val;
				this.userMsg.type = val.name;
				this.userMsg.price = val.money;
			},
			subSelect(){
				this.typeName = this.obj.name;
				this.showbottom()		
			},
			showbottom(){
				this.typeShow = !this.typeShow;
			}
		}
	}
</script>

<style lang="less">
	.container {
		background-color: #eee;		
		position: relative;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		height: 100vh;
		width: 100vw;		
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
		.submit{
			padding: 0 10px;
		}
	}
</style>
