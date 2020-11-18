<template>
	<layout class='lay'>
			<map class='map'></map>
			<box class='box1'>
                <wuguan-card :selected="selected===0"  @click.native='selectThis(0)'/>
				<wuguan-card :selected="selected===1"  @click.native='selectThis(1)'/>
				<wuguan-card :selected="selected===2"  @click.native='selectThis(2)'/>
				<wuguan-card :selected="selected===3"  @click.native='selectThis(3)'/>
				<wuguan-card :selected="selected===4"  @click.native='selectThis(4)'/>
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
			 if (typeof page.getTabBar === 'function' && page.getTabBar()) {
			      page.getTabBar().setData({
			        selected: 3  //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
			      })
			    }	
		 }
		 ,
		 methods:{
			selectThis(index){
				console.log(11)
				this.selected = index
			} 
		 }
	}
</script>

<style lang="scss" scoped>
.map{
	height:600upx;
	width: 100%;
}
.box1{
	padding-top: 0;
	background-color: #f7f7f7;
}

</style>
