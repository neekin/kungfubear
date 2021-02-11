import dayjs from 'dayjs'
const Appointment = {
	namespaced:true,
	state: {
		date: dayjs().format('YYYY-MM-DD')
	},
	mutations: {
		setDate(state, data) {
			state.date = data
		}
	},
	actions: {
	    setDate({commit},data) {
			commit('setDate', data)
		}
	},
	getters:{
	    getDate:state=> state.date
	}
}
export default Appointment
