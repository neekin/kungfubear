import Vue from 'vue'
import App from './App'
import store from "./store";
Vue.config.productionTip = false
App.mpType = 'app'
// 通用组件
import wuguanHeader from './components/wuguanHeader'
import wuguanCard from './components/wuguanCard'
import masterDetail from './components/masterDetail'
import actionsheet from './components/actionsheet'
import tabs from './components/tabs'
import button from './components/successbtn'

// 布局组件
import layout from 'layout/layout'
import box from 'layout/box'
import phoneyTab from './layout/components/phoneyTab'
import panel from 'layout/components/boxpanel'
import whitepanel from 'layout/components/whitepanel'

import api from './utils/api'

Vue.component('layout', layout)
Vue.component('box', box)
Vue.component('phoneyTab',  phoneyTab)
Vue.component('panel', panel)
Vue.component('whitepanel', whitepanel)


Vue.component('wuguanHeader',  wuguanHeader)
Vue.component('wuguanCard',  wuguanCard)
Vue.component('masterDetail',  masterDetail)
Vue.component('tabs',  tabs)
Vue.component('actionsheet',  actionsheet)
Vue.component('sbtn',  button)



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

Vue.prototype.$api = api
const app = new Vue({
    ...App,
	store
})
app.$mount()
