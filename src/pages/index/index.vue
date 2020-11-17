<template>
	<layout>
		<!-- <button open-type="getUserInfo" @getuserinfo="bindgetuserinfo">登录</button> -->
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500"></swiper>
		<div class="bgmask"></div>
		 <panel />
		<menus />
		<group />
		<zhuanti />
		<banner />
		<videos /> 
	</layout>
</template>

<script>
import panel from './components/panel';
import menus from './components/menus';
import group from './components/group';
import zhuanti from './components/zhuanti';
import banner from './components/banner';
import videos from './components/videos';
import { wxLoginWithCallback } from '@/utils/wxlogin';
export default {
	components: {
		panel,
		menus,
		group,
		zhuanti,
		banner,
		videos
	},
	data() {
		return {};
	},
	onShow() {
		if (typeof this.getTabBar === 'function' && this.getTabBar()) {
			this.getTabBar().setData({
				selected: 0 //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
			});
		}
	},
	methods: {
		bindgetuserinfo(e) {
			console.log(wxLoginWithCallback);
			wxLoginWithCallback(e, null);
		}
	}
};
</script>

<style lang="scss" scoped>
.swiper {
	height: 320upx;
	background-color: #000;
}
.bgmask {
	width: 100%;
	// background-color: #ff8300;
	background: linear-gradient(#ff8300, #fff);
	height: 50px;
	position: absolute;
	top: 300upx;
	transform: translateZ(0);
	z-index: 0;
}
</style>
