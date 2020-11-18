export const setPage = (index)=>{
	const page = this.$mp.page;
	if (typeof page.getTabBar === 'function' && page.getTabBar()) {
		page.getTabBar().setData({
			selected: index
		});
	}
}