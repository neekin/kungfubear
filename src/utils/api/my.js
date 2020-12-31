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
	// 添加孩子
	async childrenCreate(children) {
		// 孩子姓名	children_name string
		// 孩子生日 children_birthday
		// 孩子特长 children_trait
		// 孩子性别 children_sex  1男 2女
		// 孩子联系人 数组children_contacts
		// 爸爸 children_contacts.title
		// 姓名 children_contacts.name
		// 电话 children_contacts.phone
		// 协议书id 协议书 数组 protocol_list
		return post({
			url: '/children/list',
			data: children
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


}
