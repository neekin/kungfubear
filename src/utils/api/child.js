import { post,get } from '../request'
export default {
	// 绑定孩子
	add(params) {
		return post({
			url: '/children/create',
			data:{
				...params
			}
		})
	},
	// 协议列表
	// 
	pactionlist(){
		return get({
			url:'/paction/list'
		})
	}
}
