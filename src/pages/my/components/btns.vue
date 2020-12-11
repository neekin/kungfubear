<template>
	<div class="btns">
		<button>取消</button>
		<button class="success">付款</button>
	</div>
</template>

<script></script>

<style lang="scss" scoped>
.btns {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 26rpx;
	button {
		width: 148rpx;
		height: 56rpx;
		line-height: 2;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		border-radius: 32rpx;
		border: 2rpx solid #ccc;
		padding: unset;
		margin: 0 0 0 28rpx;
		background-color: #fff;
		&::after {
			content: unset;
		}
		&.success {
			color: rgba(255, 131, 0, 1);
			border-color: rgba(255, 131, 0, 1);
		}
	}
}
</style>
