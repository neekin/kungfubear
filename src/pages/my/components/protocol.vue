<template>
		<li :class="{checked:value}">
			<div class="radio "><span class="iconfont iconduigou"></span></div>
		    <slot></slot>
		</li>
</template>

<script>
	export default {
		props:{
			value:{
				type:Boolean,
				default: false
			}
		}
	}
</script>

<style scoped lang='scss'>
	li {
		display: flex;
		padding: 32rpx;
		border-bottom: 1rpx solid #f7f7f7;
		font-family: PingFangSC, PingFangSC-Semibold;
		align-items: center;
	}
	.radio {
		width: 38upx;
		height: 38upx;
		border-radius: 50%;
		border: 2upx solid #d8d8d8;
		.iconfont {
			opacity: 0;
		}
		margin-right: 16rpx;
	}
	li.checked {
		.radio {
			width: 40upx;
			height: 40upx;
			background: #ff8300;
			border: unset;
			display: flex;
			justify-content: center;
			align-items: center;
			.iconfont {
				opacity: 1;
				color: #fff;
				font-size: 30upx;
			}
		}
	}
</style>
