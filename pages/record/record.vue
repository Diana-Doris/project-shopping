<template>
		<model :dataUpdated="dataUpdated">
			<view class="recode-content" v-for="item in data" :key="item.submitTime">		
					
				<view class="content-detail">
					<image :src="item.src" ></image>
					<view class="nameMsg">
						<text>{{ item.username }}</text>
						<view class="time">
							{{ item.submitTime }}
						</view>
					</view>
				</view>
				
				<view class="steps">
					{{ item.reason ? item.reason : '无原因' }}
				</view>
			</view>
		</model>
</template>

<script>
	import model from '@/pages/model/model.vue'
	import { mapState } from 'vuex'
	
	export default{
		onReady() {
			this.recodedata = [
				...this.userMsg,
				...this.systemMsg,
				...this.returnMsg
			];
			console.log(this.recodedata)
		},
		components:{
			model
		},
		data(){
			return{
				systemSrc:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1100546106,3967820891&fm=26&gp=0.jpg',
				dataUpdated:'退款记录',
				recodedata:[]
			}
		},
		computed:{
			...mapState({
				userMsg:(state)=>state.userMsg,
				returnMsg:(state)=>state.returnMsg,
				systemMsg:(state)=>state.systemMsg
			}),			
			data(){
				return this.recodedata.sort(function(a,b){
					return b.getTimer -a.getTimer
				})
			}
		}
	}
</script>

<style lang="less" scoped>
	.recode-content{
		background-color: #fff;
		padding: 10px 10px  5px;	
			margin-bottom: 10px;
		.content-detail{			
			display: flex;	
			align-items: center;
			image{
				width: 30px;
				height: 30px;
				margin-right: 5px;
			}
			.nameMsg{
				display: flex;
				flex-direction: column;
				justify-content: center;
				line-height: 18px;
				font-size: 12px;
				.time{
					font-size: 8px;
					color: #868686;
				}
			}
		}
		.steps{
			
		}
	}
</style>
