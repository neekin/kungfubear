import Vue from "vue";
import Vuex from "vuex";
import storage from "../storage";
import home from './home'
import wuguan from './wuguan'
import layout from './layout'
import Appointment from './appointment'
import Login from './login'

Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
	    home,
		wuguan,
		layout,
		Appointment,
		Login
	  },
	state:{
		currentPage:'',
		lang:'en',
		tabBar:[
			'pages/home/index',
			'pages/wuguan/wuguan',
			'pages/gouke/gouke',
			'pages/yueke/yueke',
			'pages/my/my',
		]
	},
	mutations:{
		setCurrentPage(state,page){
			state.currentPage = page
		},
		setLanguage(state,lang){
			state.lang = lang
		}
	},
	actions: {
	  setCurrentPage({ commit }, page) {
	    commit("setCurrentPage", page);
	  }
	},
	getters: {
	  getIsTabBarPage: state => state.tabBar.indexOf(state.currentPage)> -1
	}
  // state: {
  //   user_id: storage.getItem("user_id") || ""
  // },
  // mutations: {
  //   setUserId(state, data) {
  //     state.user_id = data;
  //     storage.setItem("user_id", data);
  //   }
  // },
  // actions: {
  //   setUserId({ commit }, data) {
  //     commit("setUserId", data);
  //   }
  // },
  // getters: {
  //   getUserId: state => state.user_id
  // },
  // modules: {
  //   detail,
  //   home,
  //   search,
  //   passenger,
  //   order,
  //   fillorder
  // }
});