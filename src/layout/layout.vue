<template>
 <div class='layout'>
	 <v-header />
		 <scroll-view class='content' :scroll-y="getScrollY" upper-threshold="0" bounces="false">
			 <slot>content</slot>
			 <language :lang='getLanguage'/>
		 </scroll-view>
		 <!-- #ifndef MP-WEIXIN -->
		   <v-tabar v-if='getIsTabBarPage'/>
		 <!-- #endif -->
		 <Login />
 </div>
</template>

<script>
import VHeader from './components/header.vue';
import VTabar from './components/tabar.vue';
import language from './components/language.vue';
import Login from '../components/login.vue'
import { mapGetters  } from 'vuex'

export default {
    computed:{
		...mapGetters('Login',['getLanguage']),
		...mapGetters('layout',['getScrollY']),
	},
	components:{
		VHeader,
		VTabar,
		language,
		Login
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
