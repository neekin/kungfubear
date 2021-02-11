const URL = 'https://s.xiongxiaowu.com'
import {
	get
} from './request'
import store from '../store'
export const wxLoginWithCallback = (e, cb) => {
	let {
		userInfo,
		encryptedData,
		iv
	} = e.detail
	store.dispatch('Login/setUserInfo',userInfo)
	let code = wx.login()
	const onUserLogin = (token) => {
		getApp().globalData.token = token
		store.dispatch('Login/setAuthorization',token)
		wx.showToast({
			title: '登陆成功'
		})
		if (cb && typeof cb === 'function') {
			cb(token)
		}
	}
	const reuqestLoginApi = async (code) => {
		let res = await get({
			url: '/users/gettoken',
			data: {
				js_code: code
			}
		})
	
		onUserLogin(res.data.token)
	}
    const reLogin = ()=>{
		wx.login({
			success(res) {
				if (res.code) {
					reuqestLoginApi(res.code)
				} else {
					console.log('登录失败', res.errMsg)
				}
			}
		})
	}
	reLogin()
	// wx.checkSession({
	// 	success(res) {
	// 		let token = store.getters['Login/getAuthorization']
	// 		debugger;
	// 		if (token) onUserLogin(token)
	// 		else reLogin()
	// 	},
	// 	fail() {
 //               reLogin()			
	// 	}
	// })
}
