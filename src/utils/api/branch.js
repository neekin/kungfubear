import { get } from '../request'
export default {
	// 根据定位返回离我最近的武馆
	nearbranchlist(longitude, latitude, page, page_size) {
		return get({
			url: '/branch/nearbranchlist',
			data: {
				longitude,
				latitude,
				page,
				page_size
			}
		})
	},
	// 获取武馆列表
	branchlist() {
		return get({
			url: '/branch/branchlist'
		})
	},
	// 武馆详情
	info(longitude, latitude, branch_id) {
		return get({
			url: '/branch/info',
			data: {
				longitude,
				latitude,
				branch_id
			}
		})
	}
}
