<template>
	<div class="coupon" :class="{checked:checked}">
		<div class="text">{{ counponInfo.text }}</div>
		<div class='radio'>
			<span class='iconfont iconduigou'></span>
		</div>
	</div>
</template>

<script>
export default{
	props:{
		checked:{
			type:Boolean,
			default:false
		},
		counponInfo:{
			type:Object,
			default:()=>({})
		}
	}
}
</script>
<style lang="scss" scoped>
	.coupon{
		padding: 20upx 32upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-weight: 400;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Regular;
		.radio{
			width: 38upx;
			height: 38upx;
			border-radius: 50%;
			border: 2upx solid #d8d8d8;
			.iconfont{
				opacity: 0;
			}
		}
		&.checked{
			.radio{
				width: 40upx;
				height: 40upx;
				background: #ff8300;
				border: unset;
				display: flex;
				justify-content: center;
				align-items: center;
				.iconfont{
					opacity: 1;
					color:#fff;
					font-size: 30upx;
				}
			}
		}
		
	}
</style>
