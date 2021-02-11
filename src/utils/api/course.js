import { get , post} from '../request'
export default {
	// 获取课程类型
	typelist() {
		return get({
			url: '/course/typelist'
		})
	},
	// 获取某个武馆的课程列表
	list(branch_id,type_id,longitude=0,latitude=0) {
		return get({
			url: '/course/list',
			data:{
				branch_id,
				type_id,
				longitude,
				latitude
			}
		})
	},
	// 预约课程
	make_course(params){
		return post({
			url: '/make/course',
			data:{
				...params
			}
		})
	}
}
