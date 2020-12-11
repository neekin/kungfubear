<template>
	<div class="title" :class="{ cancel: cancel }">
		<div class="titletxt">
			<span v-if="tag" class="tag">
				{{tag}}
			</span>
			<slot>{{ title }}</slot>
		</div>

		<div class="status">
			<slot name="status">{{ statusTxt }}</slot>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			default: 'general'
		},
		cancel: {
			default: false
		},
		title: {
			default: ''
		},
		statusTxt: {
			default: ''
		},
		tag: {
			default: ''
		}
	}
};
</script>

<style lang="scss" scoped>
.title {
	&.cancel {
		.status {
			color: rgba(0, 0, 0, 0.3);
		}
	}
	.titletxt{
		white-space:nowrap;
		overflow:hidden; 
		text-overflow:ellipsis;
		// max-width: 80%;
		flex: 1;
	}
	font-size: 36rpx;
	font-family: PingFangSC, PingFangSC-Semibold;
	font-weight: 600;
	text-align: left;
	color: #000000;
	text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176, 176, 176, 0.5);
	display: flex;
	align-items: center;
	justify-content: space-between;
	.status {
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		color: #ff8300;
		text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176, 176, 176, 0.5);
		text-align: right;
		display: flex;
		flex-direction: column;
	}
	.tag {
		background: rgba(255, 144, 34, 0.2);
		border: 2rpx solid #ff8300;
		border-radius: 18rpx;
		font-size: 20rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		color: #ff8300;
		letter-spacing: 0rpx;
		padding: 2rpx 8rpx;
		box-sizing: border-box;
		text-align: center;
		margin-right: 16rpx;
		vertical-align: middle;
	}
}
</style>
