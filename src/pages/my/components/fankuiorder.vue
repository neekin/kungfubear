<template>
	<div>
		<whitepanel>
			<div class="fankui">
				<fankui-title tag="私教课">武馆大课程 扎马步练习asdfsasdasdf</fankui-title>
				<div class="time">上课时间: 2020-12-01 &nbsp; &nbsp; &nbsp;10:00-11:00</div>
				<div class="wuguan">
					上课武馆: 武小熊青少年武馆
					<button class='btn'>查看评价</button>
				</div>
			</div>
		</whitepanel>
		<whitepanel>
			<div class="fankui">
				<fankui-title tag="私教课">武馆大课程 扎马步练习asdfsasdasdf</fankui-title>
				<div class="time">上课时间: 2020-12-01 &nbsp; &nbsp; &nbsp;10:00-11:00</div>
				<div class="wuguan">
					上课武馆: 武小熊青少年武馆
					<button class='btn success'>待评价</button>
				</div>
			</div>
		</whitepanel>
	</div>
</template>

<script>
import fankuiTitle from './title';
import fankuiInfo from './info';
export default {
	components: {
		fankuiTitle,
		fankuiInfo
	}
};
</script>

<style lang="scss" scoped>
.fankui {
	padding: 36rpx 36rpx 20rpx;
	.time {
		opacity: 0.7;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 34rpx;
		text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176, 176, 176, 0.5);
		margin-top: 16rpx;
	}
	.wuguan {
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(0, 0, 0, 0.6);
		margin-top: 20rpx;
		position: relative;
		height: 80rpx;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		.btn{
			width: 144rpx;
			height: 52rpx;
			line-height: 52rpx;
			border: 2rpx solid rgba(0,0,0,0.4);
			border-radius: 32rpx;
			font-size: 24rpx;
			color:rgba(0,0,0,0.4);
			padding: 0;
			margin: 0;
			// position: absolute;
			// right:0;
			// top:50%;
			// transform: translateY(-50%);
			&::after{
				display: none;
			}
			&.success{
				color: rgba(255,131,0,1);
				border: 2rpx solid rgba(255,131,0,1);
			}
		}
	}
}
</style>
