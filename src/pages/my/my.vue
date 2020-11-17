<template>
	<layout><header></header></layout>
</template>

<script>
export default {
	data() {
		return {};
	},
	onShow() {
		if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				selected: 4 //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
			});
		}
	}
};
</script>

<style lang="scss">
header {
	background-image: url(../../static/images/header/header.png);
	height: 300upx;
}
</style>
