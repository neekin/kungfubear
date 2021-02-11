<template>
	<box>
		<div class="panel" v-if="is_login">
			<template v-if="make_course && make_course.length>0">
				<swiper :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item v-for='(item,index) in make_course' :key='index'>
						<div class="title">课程安排</div>
						<br />
						<div class="info1">{{item.children_name}} 有一节 <span> {{item.branch_course_title}}</span></div>
						<div class="info">上课时间：{{item.course_start_date}} {{item.course_start_time | times}}-{{item.course_end_time | times}}</div>
					</swiper-item>
				</swiper>
			</template>
			<template v-else>
				<div class="title">课程安排</div>
				<br />
				<div class="info">孩子最近没有约课哟</div>
				<div class="login btn" @click="yueke">去约课</div>
			</template>
		</div>
		<div class="panel" v-else>
			<div class="title">未登录</div>
			<!-- #ifdef MP -->
		<!-- 	<button class="login btn" open-type="getUserInfo" @getuserinfo="bindgetuserinfo">登录</button> -->
			<button class="login btn"  @click="()=>{ openLogin('pages/home/index') }">登录</button>
			<!-- #endif -->
			
			<!-- #ifdef H5 -->
			<button class="login btn"  @click="openLogin">登录</button>
			<!-- #endif -->
			
		</div>
	</box>
</template>

<script>
import storage from "@/storage";
import {mapActions} from 'vuex'
export default {
	computed: {
		is_login() {
			return this.value.is_login > 0;
		},
		make_course() {
			if(this.value.make_course && Array.isArray(this.value.make_course)){
				return this.value.make_coures
			}
			return [this.value.make_course];
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
		...mapActions('Login',['openLogin']),
		// login(){
		// 	this.openLogin()
		// 	// this.$store.dispatch('Login/openLogin',true)
		// 	// console.log(this.$store)
		// 	// storage.setItem('Authorization',"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvcy54aW9uZ3hpYW93dS5jb21cL2FwaVwvdjFcL3VzZXJzXC9nZXR0b2tlbiIsImlhdCI6MTYwODAyMjg5NywiZXhwIjoxNjA4MDU4ODk3LCJuYmYiOjE2MDgwMjI4OTcsImp0aSI6InkwT0pYSEttamc3dnNrRHQiLCJzdWIiOiI1QjVBQ0VFRUNGNDJENjlEQ0MzMkNFRTk2QkFERDM0NSIsInBydiI6IjQxZGY4ODM0ZjFiOThmNzBlZmE2MGFhZWRlZjQyMzQxMzcwMDY5MGMiLCJyb2xlIjoidXNlciJ9.ilh_idg55N5Gj6h0CmWwEgUiJ-clP2qvFK3ixk68fFw")
		// },
		yueke() {
			//
			uni.switchTab({
				url: '/pages/yueke/yueke'
			});
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
	swiper{
		height:100%;
	}
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
	.info1{
		opacity: 1;
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 44rpx;
		padding-top: 14rpx;
		span{
			color:rgba(255,103,0,1);
		}
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
