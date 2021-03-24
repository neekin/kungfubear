import storage from '../storage'
const Login = {
	namespaced: true,
	state: {
		loginShow: false,
		currentPage: null,
		userInfo:storage.getItem('userInfo'),
		Authorization:storage.getItem('Authorization'),
		language:storage.getItem('language') || 'zh',
	},
	mutations: {
		setLoginShow(state, data) {
			state.loginShow = data
			if (!state.loginShow && state.currentPage && state.currentPage !='') {
				wx.reLaunch({
					url:"/"+state.currentPage
				})
			}
		},
		setCurrentPage(state, data) {
			state.currentPage = data
		},
		setUserInfo(state,data){
			state.userInfo = data
			storage.setItem('userInfo',data)
		},
		setAuthorization(state,data){
			state.Authorization = data
			storage.setItem('Authorization',data)
		},
		setLanguage(state,data){
			state.language = data
			storage.setItem('language',data)
		}
	},
	actions: {
		openLogin({commit}, currentPage) {
			commit('setLoginShow', true)
			if (currentPage && currentPage !='') {
				commit('setCurrentPage', currentPage)
			}
		},
		closeLogin({commit},nothing) {
			if(nothing){
				commit('setCurrentPage',null)
			}
			commit('setLoginShow', false)
		},
		setUserInfo({commit},data){
			commit('setUserInfo',data)
		},
		setAuthorization({commit},data){
			commit('setAuthorization',data)
		},
		setLanguage({commit},data){
			commit('setLanguage',data)
		},
	},
	getters: {
		getLoginShow: state => state.loginShow,
		getUserInfo: state=> state.userInfo,
		getAuthorization: state => state.Authorization,
		getLanguage: state => state.language
	}

}
export default Login