<template>
	<box>
		<div class="panel" v-if="is_login">
			<template v-if="make_course"></template>
			<template v-else>
				<div class="title">课程安排</div>
				<br />
				<div class="info">孩子最近没有约课哟</div>
				<div class="login btn" @click="yueke">去约课</div>
			</template>
		</div>
		<div class="panel" v-else>
			<div class="title">未登录</div>
			<button class="login btn" open-type="getUserInfo" @getuserinfo="bindgetuserinfo">登录</button>
		</div>
	</box>
</template>

<script>
import { wxLoginWithCallback } from '@/utils/wxlogin';
export default {
	computed: {
		is_login() {
			return this.value.is_login > 0;
		},
		make_course() {
			return this.value.make_course;
		}
	},
	props: {
		value: {
			default: () => ({})
		}
	},
	data() {
		return {};
	},
	methods: {
		yueke() {
			//
			uni.switchTab({
				url: '/pages/yueke/yueke'
			});
		},
		bindgetuserinfo(e) {
			wxLoginWithCallback(e, null);
		}
	}
};
</script>

<style scoped lang="scss">
.panel {
	width: 686upx;
	height: 214upx;
	background-color: #fff;
	border-radius: 16upx;
	box-shadow: 0px 4upx 16upx 0px #f8ecdf;
	position: absolute;
	transform: translateY(-100upx);
	padding: 22upx 32upx;
	box-sizing: border-box;
	.info {
		opacity: 0.4;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		color: #000000;
		line-height: 34rpx;
		letter-spacing: 0rpx;
		margin-top: 24rpx;
	}
	.title {
		font-size: 40rpx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		color: #000000;
		line-height: 56rpx;
		display: inline-block;
		position: relative;
		&::after {
			content: '';
			position: absolute;
			border: 10rpx solid;
			border-color: transparent transparent transparent #000;
			right: -32rpx;
			top: 50%;
			transform: translateY(-50%);
		}
	}
	.btn {
		width: 144rpx;
		height: 52rpx;
		border: 2rpx solid #ff8300;
		border-radius: 30rpx;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: center;
		color: #ff7b00;
		line-height: 52rpx;
		letter-spacing: 0rpx;
		position: absolute;
		bottom: 32rpx;
		right: 32rpx;
		background-color: #fff;
	}
}
</style>
