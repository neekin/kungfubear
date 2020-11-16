import Vue from "vue";
import Vuex from "vuex";
import storage from "../storage";

Vue.use(Vuex);
export default new Vuex.Store({
	state:{
		currentPage:'',
		lang:'zh',
		tabBar:[
			'pages/index/index',
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
	  },
	  setLanguage({ commit }, lang) {
	    commit("setLanguage", lang);
	  }
	},
	getters: {
	  getIsTabBarPage: state => state.tabBar.indexOf(state.currentPage)> -1,
	  getLang : state => state.lang
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