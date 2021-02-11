<template>
<div class='mask' v-if='getLoginShow' @click.stop='closeLogin'>
	<div class="loginform" @click.stop='()=>{}'>
		<div class="title">
			您还未登录
			<p>请先登录在进行操作</p>
		</div>
		<button open-type="getUserInfo" @getuserinfo="bindgetuserinfo" >登录</button>
		<div class='noLogin' @click='()=>{closeLogin(true)}'>暂不登录</div>
	</div>
</div>
</template>

<script>
import { mapGetters,mapActions  } from 'vuex'
import { wxLoginWithCallback } from '@/utils/wxlogin';
export default {
	computed:{
		...mapGetters('Login',["getLoginShow"])
	},
	data() {
		return {
		};
	},
	methods:{
		...mapActions('Login',['closeLogin']),
		bindgetuserinfo(e) {
			wxLoginWithCallback(e, (res)=>{
				if(res){
					this.closeLogin()
				}
			});
		}
	}
}
</script>

<style lang="scss">
.mask{
	top:0;
	left:0;
	height: 100vh;
	width: 100vw;
	position: fixed;
	z-index: 9999;
	background-color: rgba(112,112,112,0.3);
	.loginform{
		transform: translateX(-50%) translateY(-50%);
		position: absolute;
		width: 688rpx;
		height: 584rpx;
		border-radius: 60rpx;
		background: #ffffff;
		top:50%;
		left:50%;
		display: flex;
		flex-direction: column;
		align-items: center;
		.title{
			display: flex;
			flex-direction: column;
			align-items: center;
			font-size: 36rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			color: rgba(0,0,0,0.7);
			line-height: 50rpx;
			margin-top: 132rpx;
			p{
				font-size: 28rpx;
			}
		}
		button{
			margin-top: 62rpx;
			width: 518rpx;
			height: 100rpx;
			background: #ff8300;
			border-radius: 50rpx;
			box-shadow: 0rpx 4rpx 8rpx 0rpx #ff9022; 
			font-size: 36rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			color: #ffffff;
			line-height: 100rpx;
			letter-spacing: 2rpx;
			&::after{
				content: unset;
			}
		}
		.noLogin{
			width: 128rpx;
			height: 44rpx;
			font-size: 32rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			color: rgba(0,0,0,0.5);
			line-height: 44rpx;
			padding: 20rpx 40rpx;
			margin-top: 42rpx;
		}
	}
}
</style>
