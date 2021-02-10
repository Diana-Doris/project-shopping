import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
			userMsg:[],
			systemMsg:[],
			returnMsg:[]
		},
    mutations: {
			changeUserName(state,val){
				state.userMsg.splice(0,0,val)
				console.log(state.userMsg)
			},
			changeReturnMsg(state,val){
				console.log('vuex',val);
				state.returnMsg.splice(0,0,val)
			},
			changeSystemMsg(state,val){
				state.systemMsg.splice(0,0,val)
			},
		},
    actions: {
			
		}
})
export default store