const URL = 'https://s.xiongxiaowu.com'
import {
	get
} from './request'
import storage from "../storage";
export const wxLoginWithCallback = (e, cb) => {
	let {
		userInfo,
		encryptedData,
		iv
	} = e.detail
	let code = wx.login()
	const reuqestLoginApi = async (code) => {
		let res = await get({
			url: '/users/gettoken',
			data: {
				js_code: code
			}
		})
		onUserLogin(res.data.token)
	}
	const onUserLogin = (token) => {
		getApp().globalData.token = token
		storage.setItem('Authorization', token)
		wx.showToast({
			title: '登陆成功'
		})
		if (cb && typeof cb === 'function') {
			cb(token)
		}
	}

	wx.checkSession({
		success() {
			let token = storage.getItem('Authorization')
			if (token) onUserLogin(token)
		},
		fail() {
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
	})
}
