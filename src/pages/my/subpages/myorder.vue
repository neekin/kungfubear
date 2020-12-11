<template>
<layout>
	<tabs v-model='type' :list='types'></tabs>
	<group-order v-if='type==="拼团订单"'/>
	<general-order v-if='type==="购课订单"'/>
</layout>
</template>

<script>
	import generalOrder from '../components/generalorder'
	import groupOrder from '../components/grouporder'
	export default {
		components:{
			generalOrder,
			groupOrder
		},
		data() {
			return {
				type:'购课订单',
				types:['购课订单','拼团订单']
			};
		}
	}
</script>

<style lang="scss">

</style>
