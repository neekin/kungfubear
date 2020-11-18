<template>
 <div class='layout'>
	 <v-header />
		 <scroll-view class='content' scroll-y="true">
			 <slot>content</slot>
			 <language :lang='getLang'/>
		 </scroll-view>
		 <!-- #ifndef MP-WEIXIN -->
		   <v-tabar v-if='getIsTabBarPage'/>
		 <!-- #endif -->
 </div>
</template>

<script>
import VHeader from './components/header.vue';
import VTabar from './components/tabar.vue';
import language from './components/language.vue';
import { mapGetters  } from 'vuex'

export default {
    computed:{
		...mapGetters(['getIsTabBarPage','getLang'])
	},
	components:{
		VHeader,
		VTabar,
		language
	}
}
</script>
<style lang='scss' scoped>
	.layout{
		display: flex;
		height:100vh;
		flex-direction: column;
		background-color: #f7f7f7;
		.content{
			flex:1;
			overflow: hidden;
			position: relative;
		}
	}
</style>
