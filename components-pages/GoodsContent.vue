<template>
	<view class="goods">
		<text class="course">退款课程</text>
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
	</view>
</template>

<script>
	export default{
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
		background-color: #fff;
		margin: 10px;
		padding:5px 10px;
		font-size: 16px;
		.course{
			font-size: 12px;
			margin-bottom: 10px;
		}
		.goods-content{
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
	}
</style>
