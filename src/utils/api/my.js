import {
	get,
	post
} from '../request'
export default {
	// 孩子列表
	async childrenList() {
		return get({
			url: '/children/list'
		})
	},
	// 修改家庭组名称
	async rename(family_name) {
		return post({
			url: '/family/rename',
			data: {
				family_name
			}
		})
	},
	//   加入家庭组
	async joinFamily(family_id) {
		return post({
			url: '/users/joinfamily',
			data: {
				family_id
			}
		})
	},
	//获取预约课程列表
    async make_list(children_id,type){
		// /usercenter/course/make/list
		return get({
			url: '/usercenter/course/make/list',
			data:{
				children_id,
				type
			}
		})
	},
	// 取消预约课程
	// /usercenter/course/make/cancel
	cancel(make_id){
		return post({
			url:'/usercenter/course/make/cancel',
			data:{
				make_id
			}
		})
	},
	mylist(){
		return get({
			url:"/usercenter/course/mylist",
		})
	}


}
