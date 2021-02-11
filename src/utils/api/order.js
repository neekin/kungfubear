import { post ,get } from '../request'
export default {
	// 创建订单
	generateorder(branch_course_id) {
		return post({
			url: '/order/generateorder',
			data:{
				branch_course_id
			}
		})
	},
	// 订单列表
	getList(order_type,page=1,page_size=20){
		return get({
			url:"/order/list",
			data:{
				order_type,page,page_size
			}
		})
	},
	cancel(order_id){
		return post({
			url:"/order/cancel",
			data:{
				order_id
			}
		})
	}
}
