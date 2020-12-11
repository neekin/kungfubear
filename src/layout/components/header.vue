<template>
	<div class="header">
		<div :style="{ height: statusBarHeight + 'px' }"></div>
		<div class="content" :style="{ height: navBarHeight + 'px' }">
			<div class="buttons">
				<div class="back" @click='back'><img src="/static/images/header/home_left.svg" alt="" mode="aspectFit" /></div>
				<img src="/static/images/header/home_line.svg" alt="" mode="aspectFit" class="line" />
				<div class="btns" @click="showTabar"><img src="/static/images/header/home_burger.svg" alt="" mode="aspectFit" /></div>
			</div>
			<span class="title">武馆智慧平台</span>
		</div>
		<div class="topTabar" :class="topTabarStatus" :style="{ top: statusBarHeight + navBarHeight + 'px' }">
			<div class="btns">
		<div class="btn active" v-if="home">
			<img src="/static/images/tabar/home_active.svg" alt="" />
			首页
		</div>
		<div class="btn" v-else @click='goPage("/pages/home/index")'>
			<img src="/static/images/tabar/home.svg" alt="" />
			首页
		</div>

		<div class="btn active" v-if="wuguan">
			<img src="/static/images/tabar/shop_active.svg" alt="" />
			武馆
		</div>
		<div class="btn" v-else @click='goPage("/pages/wuguan/wuguan")'>
			<img src="/static/images/tabar/shop.svg" alt="" />
			武馆
		</div>

		<div class="btn active" v-if="yueke">
			<img src="/static/images/tabar/clock_active.svg" alt="" />
			约课
		</div>
		<div class="btn" v-else @click='goPage("/pages/yueke/yueke")'>
			<img src="/static/images/tabar/clock.svg" alt="" />
			约课
		</div>

		<div class="btn active" v-if='gouke'>
			<img src="/static/images/tabar/order_active.svg" alt="" />
			购课
		</div>
		<div class="btn" v-else @click='goPage("/pages/gouke/gouke")'>
			<img src="/static/images/tabar/order.svg" alt="" />
			购课
		</div>

		<div class="btn active" v-if='my'>
			<img src="/static/images/tabar/bear_active.svg" alt="" />
			我的
		</div>
		<div class="btn" v-else @click='goPage("/pages/my/my")'>
			<img src="/static/images/tabar/bear.svg" alt="" />
			我的
		</div>
			</div>
		</div>
		<div class="mask" :class='topTabarStatus' @click='hideTabar'></div>
	</div>
</template>

<script>
import { mapState ,mapMutations} from 'vuex';
export default {
	data() {
		return {
			statusBarHeight: 0,
			navBarHeight: 44,
			tabarIsShow: false
		};
	},
	created() {
		//获取手机信息
		const info = uni.getSystemInfoSync();
		//设置状态栏高度
		this.statusBarHeight = info.statusBarHeight;
		// 兼容小程序写法
		// #ifndef H5 || APP-PLUS || MP-ALIPAY
		const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
		// 胶囊底部高度 - 状态栏的高度 + 胶囊顶部高度-顶部栏的高度
		this.navBarHeight = menuButtonInfo.bottom - info.statusBarHeight + (menuButtonInfo.top - info.statusBarHeight);
		// #endif
	},
	methods: {
		...mapMutations(['setCurrentPage']),
		goPage(url){
			this.hideTabar()
			uni.switchTab({
				url:url
			})
		},
		showTabar() {
			this.tabarIsShow = !this.tabarIsShow;
		},
		hideTabar(){
			this.tabarIsShow = false
		},
		back() {
			uni.navigateBack({
				delta: 1
			});
		}
	},
	computed: {
		topTabarStatus() {
			return this.tabarIsShow ? 'show' : 'hide';
		},
		...mapState(['currentPage']),
		home() {
			return this.currentPage === 'pages/index/index';
		},
		wuguan() {
			return this.currentPage === 'pages/wuguan/wuguan';
		},
		yueke() {
			return this.currentPage === 'pages/yueke/yueke';
		},
		gouke() {
			return this.currentPage === 'pages/gouke/gouke';
		},
		my() {
			return this.currentPage === 'pages/my/my';
		}
	}
};
</script>

<style lang="scss" scoped>
.header {
	background: #ff8300;
	position: static;
	.content {
		display: flex;
		justify-items: center;
		align-items: center;
		.title {
			width: 380upx;
			font-size: 32upx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			color: #ffffff;
			text-align: center;
		}
		.buttons {
			display: flex;
			width: 176upx;
			.btns,
			.back {
				display: flex;
				justify-content: center;
			}
			.back {
				width: 88upx;
				img {
					width: 18upx;
					height: 32upx;
				}
			}
			.line {
				height: 32upx;
				width: 2upx;
			}
			.btns {
				width: 86upx;
				img {
					width: 32upx;
					height: 32upx;
				}
			}
		}
	}
	.topTabar.show {
		height: 380upx;
	}
	.topTabar {
		transform: translateZ(0);
		transition: height 0.5s;
		position: absolute;
		z-index: 9999;
		left: 32upx;
		height: 0;
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		&::before {
			content: '';
			width: 0;
			height: 0;
			border-width: 20upx;
			border-style: solid;
			border-bottom-color: #fff;
			border-left-color: transparent;
			border-right-color: transparent;
			border-top-color: transparent;
			position: relative;
			left: 90upx;
		}
		.btns {
			transform: translateZ(0);
			height: 350upx;
			width: 190upx;
			box-shadow: 0px 6upx 20upx -8upx #ff8300;
			border-radius: 10upx;
			background: #ffffff;
			overflow: hidden;
			.btn {
				margin: 30upx auto;
				font-size: 20upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000;
				display: flex;
				justify-content: space-between;
				justify-items: center;
				height: 36upx;
				width: 100upx;
				img {
					width: 36upx;
					height: 36upx;
				}
			}
			.btn.active {
				color: #ff8300;
			}
		}
	}
}
.mask{
	height:100vh;
	position: fixed;
	width: 100vw;
	background-color: #000;
	z-index: 10;
	opacity: 0.2;
}
.mask.hide{
	display: none;
}
/* 	@keyframes showTabar{
		0%{
			height:0;
		}
		100%{
			height:380upx;
		}
	}
	@keyframes hideTabar{
		0%{
			height:380upx;
		}
		100%{
			height:0;
		}
	} */
/* 	filter: blur(40px); */
</style>
