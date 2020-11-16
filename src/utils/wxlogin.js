const URL = 'https://s.xiongxiaowu.com'

export const wxLoginWithCallback = (e,cb)=>{
		let { userInfo ,encryptedData,iv} = e.detail
		let code = wx.login()
		const reuqestLoginApi = (code)=>{
			wx.request({
				url:URL+'/api/v1/users/gettoken',
				method: 'GET',
				header: {
					'Accept':'application/vnd.xxw.v1+json',
					'content-type':'application/json',
					'MiniEnvCode':'00014122C753E8770B00212230A455F0'
				},
				data:{
					js_code:code
				},
				success(res){
					let token = res.data.data.token
					wx.setStorageSync('token',token)
					onUserLogin(token)
				},
			})
		}
		const onUserLogin = (token)=>{
			getApp().globalData.token = token
			wx.showToast({
				title:'登陆成功'
			})
			if(cb && typeof cb ==='function'){
				cb(token)
			}
		}
		
		wx.checkSession({
			success(){
				let token = wx.getStorageSync('token')
				if(token) onUserLogin(token)
			},
			fail(){
				wx.login({
					success(res){
						if(res.code){
							reuqestLoginApi(res.code)
						}else{
							console.log('登录失败',res.errMsg)
						}
					}
				})
			}
		})
	}