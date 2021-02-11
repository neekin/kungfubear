const baseUrl = 'https://s.xiongxiaowu.com'
const version = '/api/v1'
const host = baseUrl + version

import store from '../store'
export function request(url, method, data, header = {}, timeout = 5000) {
	uni.showLoading({
		title: '请求中' 
	})
	let Authorization =  store.getters['Login/getAuthorization']
	let language =  store.getters['Login/getLanguage']
	let headers = {
		...header,
		'Accept': 'application/vnd.xxw.v1+json',
		'MiniEnvCode': '00014122C753E8770B00212230A455F0',
		'content-type': 'application/json',
		language
	}
	if (Authorization) {
		headers.Authorization = "Bearer "+Authorization
	}
	return new Promise((resolve, reject) => {
		// 
		uni.request({
			url: host + url,
			method: method,
			data: data,
			timeout: timeout,
			header: { ...headers
			},
			success: function(res) {
				uni.hideLoading()
				if(res.statusCode===403){
					let routes = getCurrentPages(); // 获取当前打开过的页面路由数组
					let curRoute = routes[routes.length - 1].route 
					store.dispatch('Login/openLogin',curRoute)
				}
				resolve(res.data)
			},
			fail: function(res) {
				// uni.hideLoading()
				reject(res)
			},
			complete: function() {
				uni.hideLoading()
			}
		})
	})
}

export function get(obj) {
	return request(obj.url, 'GET', obj.data)
}

export function post(obj) {
	return request(obj.url, 'POST', obj.data)
}

export default {
	request,
	get,
	post,
	baseUrl
}
