<template>
	<model :updownObj="updownObj">
		<write-pay v-if="showPayComponent"/>
		<complete/>
		<order-complete />
	</model>
</template>

<script>
	import model from '@/pages/model/pay-money.vue'
	import complete from '@/components-pages/OrderComplete.vue'
	import orderComplete from '@/components-pages/OrdersCommpleteMsg.vue'
	import writePay from '@/components-pages/orderWritePay.vue'
	import { mapState } from 'vuex'
	
	export default{
		components:{
			model,
			complete,
			orderComplete,
			writePay
		},
		data() {
			return {
				
			}
		},
		computed:{			
			...mapState({
				showPayComponent:(state)=>(state.showPayComponent),
				hasBeenMade:(state)=>(state.hasBeenMade),
				updownObj:(state)=>(state.modelPay)
			})
		}
	}
</script>

<style lang="scss">
	
</style>
