const wuguan = {
	namespaced:true,
	state: {
		wuguan:{}
	},
	mutations: {
		setWuGuan(state, data) {
			state.wuguan = data
		}
	},
	actions: {
	    setWuGuan({commit},data) {
			commit('setWuGuan', data)
		}
	},
	getters:{
	    getWuGuan:state=> state.wuguan
	}
	
}
export default wuguan
