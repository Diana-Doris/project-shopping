<template>
	<view class="goods">
		<view class="goods-content">
			<image :src="imageURL" mode="图片"></image>
			<view class="text">
				<p>中国近代史纲要，淮安中学知名孙大宝教授亲自授课</p>
				<view>
					有效期：
					<span>永久有效</span>
				</view>
			</view>
		</view>
		<view class="msg-content">
			<view class="type">
				<text>退款类型：</text>
				<text>{{ returnDataDetail.name }}</text>
			</view>
			<view class="money">
				<text>退款金额：</text>
				<text>{{ returnDataDetail.money }}</text>
			</view>
			<view class="timer">
				<text>申请时间：</text>
				<text>{{ returnDataDetail.submitTime }}</text>
			</view>
			<view class="number">
				<text>退款编号：</text>
				<text>编号</text>
				<text>复制</text>
			</view>	
		</view>		
	</view>
</template>

<script>
	export default{
		props:['returnDataDetail'],
		data() {
			return {
				name:'name',
				imageURL: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3456825387,270175843&fm=26&gp=0.jpg'
			}
		},
	}
</script>

<style lang="less" scoped>
	.goods{
		.goods-content{
			padding-top: 5px;
			display: flex;
			justify-content: space-between;	
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
		.msg-content{
			font-size: 10px;			
			text{
				margin-left: 3px;
			}			
		}
	}
</style>
