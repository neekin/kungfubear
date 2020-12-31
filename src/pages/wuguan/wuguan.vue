<template>
	<layout class="wuguan">
		<tab mode="list" />
		<navigator v-for="item in list" :url="'/pages/wuguan/wuguaninfo?uid=' + item.uid" :key='item.uid'><card :value='item' /></navigator>
		<phoney-tab />
	</layout>
</template>

<script>
import tab from './components/tab.vue';
import card from './components/card.vue';
export default {
	components: {
		tab,
		card
	},
	onShow() {
		const page = this.$mp.page;
		if (typeof page.getTabBar === 'function' && page.getTabBar()) {
			page.getTabBar().setData({
				selected: 1
			});
		}
		this.init();
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
			list: []
		};
	}
};
</script>

<style lang="scss">
.wuguan {
	background-color: #f7f7f7;
}
</style>
