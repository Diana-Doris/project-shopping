<template>
	<view class="goods">
		<text class="reson">补充原因和凭证</text>
		<view class="reason-content">
			<view class="reason-body">
				<p>退款详情</p>				
			</view>			
		</view>
		<view class="detail-reason" ref="detailReason">
			<textarea @input="getMsg" maxlength="200" v-model="text" placeholder="填写详细原因,能够帮助售后更好处理." placeholder-style="color:#b7b7b7"/>
			<view class="limit-type">
				<text>0/200</text>
			</view>
		</view>
		<view class="reason-content">
			<view class="reason-body">
				<p>图片上传</p>				
			</view>	
			<van-uploader v-bind:file-list="fileList" bind:after-read="afterRead" />
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text:'',
				fileList: [],
			}
		},
		methods:{
			getMsg(){
				console.log('blur',this.text)
				this.$emit('getMsg',this.text)
			},
			afterRead(event) {
			    const { file } = event.detail;
			    // 当设置 mutiple 为 true 时, file 为数组格式，否则为对象格式
			    wx.uploadFile({
			      url: 'https://example.weixin.qq.com/upload', // 仅为示例，非真实的接口地址
			      filePath: file.url,
			      name: 'file',
			      formData: { user: 'test' },
			      success(res) {
			        // 上传完成需要更新 fileList
			        const { fileList = [] } = this.data;
			        fileList.push({ ...file, url: res.data });
			        this.setData({ fileList });
			      },
			    });
			  },
		}
	}
</script>

<style lang="less" scoped>
	.goods{
		background-color: #fff;
		margin: 10px;
		padding:5px 10px;
		font-size: 16px;
		.reson{
			font-size: 12px;
			margin-bottom: 10px;
		}
		.reason-content{
			.reason-body{
				display: flex;
				justify-content: space-between;
				font-size: 10px;
			}
		}
		.detail-reason{
			position: relative;
			background-color: #eee;	
			font-size: 10px;
			textarea{
				padding: 10px;	
				width: 260px;
				height: 60px;
				line-height: 15px;
				margin-bottom: 10px;
			}
			.limit-type{
				position: absolute;
				right: 10px;
				bottom: 0;
				color: #b7b7b7;
			}
		}
	}
</style>
