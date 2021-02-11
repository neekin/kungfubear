<template>
	<layout>
		<order v-for='item in list' :key='item.order_goods_id' :item='item' />
	</layout>
</template>

<script>
import order from '../components/keshiorder';
export default {
	components: {
		order
	},
	data() {
		return {
			list:[]
		};
	},
	onShow(){
		this.init()
	},
	methods:{
		init(){
			this.getList();
		},
		async getList(){
			const { data } = await this.$api.my.mylist()
			this.list = data
		}
	}
};
</script>

<style lang="scss" scoped></style>
