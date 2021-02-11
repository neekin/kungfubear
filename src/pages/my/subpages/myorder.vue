<template>
<layout>
	   <tabs v-model='type' :list='types'></tabs>
		<group-order v-if='type==="拼团订单"' :list='groupOrders' />
		<general-order v-if='type==="购课订单"' :list='generalOrders' />
</layout>
</template>

<script>
	import generalOrder from '../components/generalorder'
	import groupOrder from '../components/grouporder'
	import {mapActions} from 'vuex'
	export default {
		methods:{
			...mapActions('layout',['setScrollY'])
		},
		onLoad(){
			this.setScrollY(false);
			this.$api.order.getList(0).then(res=>{
				// console.log(res.data)
				this.generalOrders = res.data.list
			})
		},
		onUnload(){
			console.log('执行了')
			this.setScrollY(true)
		},
		components:{
			generalOrder,
			groupOrder
		},
		data() {
			return {
				type:'购课订单',
				types:['购课订单','拼团订单'],
				generalOrders:[],
				groupOrders:[]
			};
		}
	}
</script>

<style lang="scss">
	// .myorder-content {
	// 	display: flex;
	// 	flex-direction: column;
	// 	// height: 760rpx;
	// 	// margin-top: 154rpx;
	// 	// background-color: #000;
	// 	// height: 100%;
	// }
</style>
