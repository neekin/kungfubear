<template>
	<layout class='lay'>
			<map class='map'></map>
			<box class='box1'  v-if='list.length>0'>
					<wuguan-card v-for='(item,index) in list' :key='item.uid' :selected="selected === index" url='/pages/yueke/yuekeinfo' text='去约课' @click.native="selectThis(index)" :item='item' />
			</box>
			<box class='box1' v-else>
				<button @click='init'>重试</button>
			</box>
			<phoney-tab/>
	</layout>
</template>

<script>
	export default {
		 data(){
			 return {
				 selected:0,
				 list:[]
			 }
		 },
		 onShow(){
			 const page = this.$mp.page  
			 if (typeof page.getTabBar === 'function' && page.getTabBar()) {
			      page.getTabBar().setData({
			        selected: 2  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
			      })
			    }
				this.init()
		 },
		 methods:{
			selectThis(index){
				this.selected = index
			},
			init(){
				let self = this
				uni.getLocation({
				            type: 'wgs84',
				            success(res) {
								self.getList(res)
								
				            }
				 });
			},
			getList(location){
				const {longitude, latitude} = location
				this.$api.branch.nearbranchlist(longitude,latitude).then(res=>{
					this.list = res.data.list
				})
			}
		 }
	}
</script>

<style lang="scss" scoped>
.lay{
	background-color: #f7f7f7;
}
.map{
	height:600upx;
	width: 100%;
}
.box1{
	padding-top: 0;
}

</style>