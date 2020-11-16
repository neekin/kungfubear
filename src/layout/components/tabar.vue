<template>
	<div class="tabar">
		<div class="btn active" v-if="home">
			<img src="/static/images/tabar/home_act.gif" alt="" />
			首页
		</div>
		<div class="btn" v-else @click='goPage("/pages/index/index")'>
			<img src="/static/images/tabar/home.svg" alt="" />
			首页
		</div>

		<div class="btn active" v-if="wuguan">
			<img src="/static/images/tabar/shop_act.gif" alt="" />
			武馆
		</div>
		<div class="btn" v-else @click='goPage("/pages/wuguan/wuguan")'>
			<img src="/static/images/tabar/shop.svg" alt="" />
			武馆
		</div>

		<div class="btn active" v-if="yueke">
			<img src="/static/images/tabar/clock_act.gif" alt="" />
			约课
		</div>
		<div class="btn" v-else @click='goPage("/pages/yueke/yueke")'>
			<img src="/static/images/tabar/clock.svg" alt="" />
			约课
		</div>

		<div class="btn active" v-if='gouke'>
			<img src="/static/images/tabar/order_act.gif" alt="" />
			购课
		</div>
		<div class="btn" v-else @click='goPage("/pages/gouke/gouke")'>
			<img src="/static/images/tabar/order.svg" alt="" />
			购课
		</div>

		<div class="btn active" v-if='my'>
			<img src="/static/images/tabar/bear_act.gif" alt="" />
			我的
		</div>
		<div class="btn" v-else @click='goPage("/pages/my/my")'>
			<img src="/static/images/tabar/bear.svg" alt="" />
			我的
		</div>
	</div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
	methods:{
		...mapMutations(['setCurrentPage']),
		goPage(url){
			uni.switchTab({
				url:url
			})
		},
	},
	computed: {
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
.tabar {
	height: 98upx;
	display: flex;
	justify-content: space-between;
	padding: 0 58upx;
	border-top: 1upx solid rgba(0, 0, 0, 0.1);
	box-sizing: border-box;
	padding-top: 10upx;
	background-color: #fff;
	.btn {
		height: 70upx;
		display: grid;
		justify-items: center;
		font-size: 20upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(0, 0, 0, 0.5);
		img {
			width: 42upx;
			height: 42upx;
		}
	}
	.btn.active {
		color: #ff8300;
	}
}
</style>
