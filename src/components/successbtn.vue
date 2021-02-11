<template>
	<div  class='success'>
		<button >
			<slot>按钮</slot>
		</button>
    </div>
</template>

<script>
export default{
}
</script>

<style scoped lang='scss'>
	.success{
		padding: 24rpx 32rpx;
		button{
			width: 686rpx;
			height: 90rpx;
			line-height: 90rpx;
			background: #ff8300;
			border-radius: 44rpx;
			box-shadow: 0rpx 4rpx 8rpx 0rpx #ff9022; 
			font-size: 32rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			color: #ffffff;
			&::after{
				display: none;
			}
		}
	}
</style>
