<template>
	<div class="box">
		<div class="panel"><slot>panel</slot></div>
	</div>
</template>

<style scoped lang="scss">
.box {
	width: 100%;
	padding: 0 32rpx;
	margin: 32rpx 0;
	box-sizing: border-box;
}
.panel {
	width: 100%;
	height: 100%;
	box-sizing: border-box;
	background-color: #fff;
	border-radius: 16rpx;
}
</style>
