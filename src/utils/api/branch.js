import { get } from '../request'
export default {
	// 根据定位返回离我最近的武馆
	nearbranchlist(longitude, latitude, page=1, page_size=20) {
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
	info(branch_id,longitude=0, latitude=0) {
		return get({
			url: '/branch/info',
			data: {
				longitude,
				latitude,
				branch_id
			}
		})
	},
	//获取指定日期课程安排列表
	getcourselist(branch_id,date,is_experience=0){
		return get({
			url:'/branch/getcourselist',
			data:{
				branch_id,
				date,
				is_experience
			}
		})
	},
	makestafflist(branch_id,date){
		return get({
			url:'/branch/makestafflist',
			data:{
				branch_id,
				date
			}
		})
	}
}
