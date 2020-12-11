import {
	get
} from '../request'
export default {
	async Index() {
		return get({
			url: '/site/index'
		})
	},
	
}
