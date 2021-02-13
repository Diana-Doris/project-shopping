import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
			userMsg:[],
			systemMsg:[],
			returnMsg:[],
			goodsObj:{},
			detailObj:{},
			showPayComponent:false,
			hasBeenMade:false,
			modelPay:{
						title: '完成',
						iconName:'passed'					
			}
		},
    mutations: {
			changeModelPay(state,val){
				state.modelPay = val;
			},
			changeHasBeenMade(state,val){
				console.log(val)
				state.hasBeenMade = val;
			},
			changeDetailObj(state,val){
				state.detailObj = val;
			},
			changePayComponent(state,val){
				state.showPayComponent = val;
			},
			changeUserName(state,val){
				state.userMsg.splice(0,0,val)
			},
			changeReturnMsg(state,val){
				state.returnMsg.splice(0,0,val)
			},
			changeSystemMsg(state,val){
				state.systemMsg.splice(0,0,val)
			},
			changeGoodsObj(state,val){
				state.goodsObj = {...val};
			}
		},
    actions: {
			
		}
})
export default store