<template>
	<layout class='lay'>
			<map class='map'></map>
			<box class='box1'>
                <wuguan-card :selected="selected===0"  @click.native='selectThis(0)' text='去约课' url='/pages/yueke/yuekeinfo'/>
			</box>
			<phoney-tab/>
	</layout>
</template>

<script>
	export default {
		 data(){
			 return {
				 selected:1
			 }
		 },
		 onShow(){
			 const page = this.$mp.page  
			 console.log(typeof page.getTabBar)
			 if (typeof page.getTabBar === 'function' && page.getTabBar()) {
				 console.log('调用了没')
			      page.getTabBar().setData({
			        selected: 2  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
			      })
			    }	
		 },
		 methods:{
			selectThis(index){
				this.selected = index
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