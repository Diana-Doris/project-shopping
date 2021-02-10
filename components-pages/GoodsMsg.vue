<template>
	<view class="goods">
		<text class="msg">退款信息</text>
		<view class="msg-content">
			<view class="msg-body">
				<p>退款类型<text class="icon">*</text></p>
				<view class="select" @click="showbottom">
					{{ typeName }}
					<van-icon name="arrow" />
				</view>
			</view>
			<view class="msg-body">
				<p>退款金额<text class="icon">*</text></p>
				<view class="money">
					￥
					<text>{{ ordermoney }}</text>
				</view>
			</view>
		</view>
		<view class="msg-select" :style="{bottom: -typeHeight + 'px'}" v-show="typeShow">
			<p class="type">退款类型</p>
			<radio-group @change="radioChange" class="radio-group">
				<label class="list" v-for="(item, index) in items" :key="item.value" @click="radioClick(index,current,item.name)">
					<view>{{item.name}}</view>	
					<view >
						<radio :value="item.value" :checked="index === current" class="radio-style"/>
					</view>
				</label>
			</radio-group>
			<view class="submitbox">
				<van-button type="danger" block round="true" size="mini" @click="subSelect">提交</van-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:['typeShow','typeName'],
		mounted() {
			this.getDescBox()
		},
		data() {
			return {
				ordermoney:98,
				typeHeight:null,
				items: [
					{
						value:"仅仅退款",
						name:'仅仅退款',
						checked:'true'
					},
					{
						value:"退款后重新购买",
						name:'退款后重新购买',
					},
					{
						value:"退款但是保留优惠券",
						name:'退款但是保留优惠券',
					},
					{
						value:"退款并退还",
						name:'退款并退还',
					},					
				],
				current: 0,
			}
		},
		methods:{
			subSelect(){
				this.$emit('subSelect',false);
			},
			radioClick(index=0,current=0,name='仅仅退款'){			
				let obj = {
					// type:index === current,
					name:name,
					money:this.ordermoney
				}
				this.$emit('radioClick',obj);
			},
			getDescBox() { 
				 const typeBox = uni.createSelectorQuery().in(this).select('.msg-select');
				 // console.log(typeBox)
				 typeBox.boundingClientRect(data=>{
					this.typeHeight = data.height;
				 }).exec()
				 
			},
			showbottom(){
				this.$emit('showbottom');
				this.radioClick()
			},
			radioChange(evt) {
				// console.log(evt.target)
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			}
		}
	}
</script>

<style lang="less" scoped>
	.goods{
		background-color: #fff;
		margin: 10px;
		padding:5px 10px;
		font-size: 16px;
		.msg{
			font-size: 12px;
			margin-bottom: 10px;
		}
		.msg-content{
			.msg-body{
				display: flex;
				justify-content: space-between;
				font-size: 10px;
				.icon{
					color: red;
				}
				.select{
					color: #cccccc;
				}
				.money{
					color: #d30000;
				}
			}
		}
		.msg-select{
			transition: bottom 1s;
			background-color: #fff;
			position: absolute;
			left: 0;
			right: 0;
			z-index: 10;
			font-size: 12px;
			p.type{
				text-align: center;
				padding: 5px;
			}
			.submitbox{
				padding: 0 10px;
				margin-bottom: 5px;
			}
			.radio-group{
				.list{
					padding: 5px;
					display: flex;
					justify-content: space-between;
					.radio-style{
						transform:scale(0.7);
						color: #f40;
					}
				}
			}
		}
	}
</style>
