const layout = {
	namespaced:true,
	state: {
		scrollY:true
	},
	mutations: {
		setScrollY(state, data) {
			state.scrollY = data
		}
	},
	actions: {
	    setScrollY({commit},data) {
			commit('setScrollY', data)
		}
	},
	getters:{
	    getScrollY:state=> state.scrollY
	}
	
}
export default layout
