<template>
	<layout>
		<div class="content">
			<tab mode='map'/>
			<map name=""></map>
			<map-card :item='item' />
		</div>
	</layout>
</template>

<script>
import tab from './components/tab.vue';
import mapCard from './components/mapCard.vue'
export default {
	components: {
		tab,
		mapCard
	},
	onShow(){
		this.init()
	},
	methods: {
		init() {
			this.$api.branch.branchlist().then(res => {
				this.list = res.data.list;
			});
		}
	},
	data() {
		return {
			list: [],
			item:null
		};
	}
};
</script>

<style lang="scss" scoped>
	.content{
		background-color: #e7e7e7;
		display: flex;
		flex-direction: column;
		height:100%;
		width: 100%;
		map{
			flex:1;
			width: 100%;
		}
	}
</style>
