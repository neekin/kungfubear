<template>
	<box>
		<div class='infoTab'>
			<div class='btn active'> <span>武馆介绍</span></div>
			<div class='btn'> <span>师父介绍</span></div>
			<div class='btn'> <span>武馆客服</span></div>
		</div>
	</box>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.infoTab{
	display: flex;
	width: 688upx;
	height: 96upx;
	background: #ffffff;
	border-radius: 16upx;
	box-shadow: 0px 0px 12upx 2upx rgba(176,176,176,0.5); 
	justify-content: space-between;
	padding: 0 60upx;
	box-sizing: border-box;
	.btn{
		display: flex;
		justify-items: center;
		align-items: center;
		height: 96upx;
		box-sizing: border-box;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 400;
		color: #000000;
	}
	.btn.active{
		font-weight: 500;
		color: #ff9022;
		span{
			position: relative;
		}
		span:after{
			content: '';
			position: absolute;
			width: 40upx;
			height: 6upx;
			background: #ff9022;
			border-radius: 6upx;
			bottom: -6upx;
			left:50%;
			transform: translateX(-50%);
		}
	}
}
</style>
