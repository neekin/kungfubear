Component({
	data: {
		selected: 0,
		color: '#7a7e89',
		selectedColor: '#3cc51f',
		list: [{
				pagePath: '/pages/home/index',
				iconPath: '/static/images/tabar/home.png',
				iconGifPath: "/static/images/tabar/home_act.gif",
				text: '首页'
			},
			{
				pagePath: '/pages/wuguan/wuguan',
				iconPath: '/static/images/tabar/shop.png',
				iconGifPath: "/static/images/tabar/shop_act.gif",
				text: '武馆'
			},
			{
				pagePath: '/pages/yueke/yueke',
				iconPath: '/static/images/tabar/clock.png',
				iconGifPath: "/static/images/tabar/clock_act.gif",
				text: '约课'
			},
			{
				pagePath: '/pages/gouke/gouke',
				iconPath: '/static/images/tabar/order.png',
				iconGifPath: "/static/images/tabar/order_act.gif",
				text: '购课'
			},
			{
				pagePath: '/pages/my/my',
				iconPath: '/static/images/tabar/bear.png',
				iconGifPath: "/static/images/tabar/bear_act.gif",
				text: '我的'
			}
		]
	},
  attached() {
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})
