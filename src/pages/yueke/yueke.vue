<template>
	<layout class='lay'>
			<map class='map'></map>
			<box class='box1'>
                <wuguan-card :selected="selected===0"  @click.native='selectThis(0)' text='去约课' url='/pages/yueke/yuekeinfo'/>
			</box>
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
			 if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			      this.getTabBar().setData({
			        selected: 2  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
			      })
			    }	
		 },
		 methods:{
			selectThis(index){
				console.log(11)
				this.selected = index
			} 
		 }
	}
</script>

<style lang="scss" scoped>
.lay{
	background-color: #ccc;
}
.map{
	height:600upx;
	width: 100%;
}
.box1{
	padding-top: 0;
}

</style>