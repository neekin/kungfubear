import {
	get,
	post
} from '../request.js'

export default {
	// 查看家庭组
	show() {
		return get({
			url: '/family/show'
		})
	},
	rename(family_name) {
		return post({
			url: '/family/rename',
			data: {
				family_name
			}
		})
	},
	//删除
	removemember(user_id) {
		return post({
			url: '/family/removemember',
			data: {
				user_id
			}
		})
	},
	setTag(user_id, tag_title) {
		return post({
			url: '/family/settag',
			data: {
				user_id,
				tag_title
			}
		})
	}
}
