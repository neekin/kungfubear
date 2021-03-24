import homeApi from '../utils/api/home'

export const SET_HOME_DATA ="SET_HOME_DATA"
export const GET_HOME_DATA ="GET_HOME_DATA"

const home = {
	namespaced:true,
	state: {
		homeData:null
	},
	mutations: {
		[SET_HOME_DATA](state, data) {
			state.homeData = data
		}
	},
	actions: {
		async [SET_HOME_DATA]({
			commit
		}) {
			const res = await homeApi.Index()
		
			commit(SET_HOME_DATA, res)
		}
	},
	getters:{
	    [GET_HOME_DATA]:state=> state
	}
	
}
export default home
