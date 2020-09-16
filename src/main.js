import Vue from 'vue'
import App from './App'
import store from "./store";
Vue.config.productionTip = false
App.mpType = 'app'
import layout from 'layout/layout'
import box from 'layout/box'
Vue.component('layout', layout)
Vue.component('box', box)
Vue.mixin({
  onShow(){
	     const pages =  getCurrentPages();    //获取加载的页面
	  　 let currentPage = pages[pages.length - 1];  //获取当前页面的对象
	     if(currentPage){
			 this.$store.dispatch('setCurrentPage',currentPage.route)
		 }else{
			 this.$store.dispatch('setCurrentPage','')
		 }
	     
  }
})
const app = new Vue({
    ...App,
	store
})
app.$mount()
