<template>
	<layout class="lay">
		<map class="map"></map>
		<box class="box1">
			<template v-if='list.length>0'>
				<wuguan-card v-for='(item,index) in list' :key='item.uid' :selected="selected === index" @click.native="selectThis(index)" :item='item' />
			</template>
			<div v-else>
				附近没有武馆
			</div>
			
		</box>
		<phoney-tab />
	</layout>
</template>

<script>
export default {
	data() {
		return {
			selected: 0,
			list: []
		};
	},
	onShow() {
		const page = this.$mp.page;
		if (typeof page.getTabBar === 'function' && page.getTabBar()) {
			page.getTabBar().setData({
				selected: 3 //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
			});
		}
		this.init();
	},
	methods: {
		selectThis(index) {
			this.selected = index;
		},
		init() {
			this.$api.branch.branchlist().then(res => {
				this.list = res.data.list;
			});
			this.$api.course.typelist().then(res=>{
				console.log('课程类型',res)
			})
		}
	}
};
</script>

<style lang="scss" scoped>
.map {
	height: 600upx;
	width: 100%;
}
.box1 {
	padding-top: 0;
	background-color: #f7f7f7;
}
</style>
