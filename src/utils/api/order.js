import { post } from '../request'
export default {
	// 创建订单
	generateorder(branch_course_id) {
		return post({
			url: '/order/generateorder',
			data:{
				branch_course_id
			}
		})
	}
}
