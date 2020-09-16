<template>
 <div class='layout'>
	 <v-header />
		 <scroll-view class='content' scroll-y="true">
			 <slot>content</slot>
		 </scroll-view>
		 <!-- #ifndef MP-WEIXIN -->
		   <v-tabar v-if='getIsTabBarPage'/>
		 <!-- #endif -->
 </div>
</template>

<script>
import VHeader from './components/header.vue';
import VTabar from './components/tabar.vue';
import { mapGetters  } from 'vuex'

export default {
    computed:{
		...mapGetters(['getIsTabBarPage'])
	},
	components:{
		VHeader,
		VTabar
	}
}
</script>
<style lang='scss' scoped>
	.layout{
		display: flex;
		height:100vh;
		flex-direction: column;
		.content{
			flex:1;
			overflow: hidden;
			position: relative;
		}
	}
</style>
