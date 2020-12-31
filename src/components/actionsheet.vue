<template>
	<div class="actionsheet" v-if='show' @click='hideac'>
		<div
			class="model"
			@click.stop="
				event => {
					event.stopImmediatePropagation();
				}">
			<div class="title">
				<slot name="title">{{ title }}</slot>
			</div>
			<div class="content"><slot></slot></div>
			<div class="footer">
				<slot name="footer">
					<button v-if="!hideCancelButton" @click='hideac'>{{ cancelButtonText }}</button>
					<button v-if="!hideComfirmButton" class="comfirm">{{ comfirmButtonText }}</button>
				</slot>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data(){
		return {
			show:false
		}
	},
	methods:{
		hideac(){
			this.show = false
		}
	},
	props: {
		title: {
			type: String,
			default: '标题'
		},
		cancelButtonText: {
			default: '取消'
		},
		comfirmButtonText: {
			default: '确认'
		},
		cancelButtonCallback: {
			type: Function,
			default: null
		},
		comfirmButtonCallback: {
			type: Function,
			default: null
		},
		hideCancelButton: {
			default: false
		},
		hideComfirmButton: {
			default: false
		},
		hideClose: {
			default: false
		}
	}
};
</script>
<style lang="scss" scoped>
.actionsheet {
	height: 100vh;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.2);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	.model {
		height: auto;
		width: 100vw;
		background-color: #ffffff;
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		position: absolute;
		bottom: 0;
		box-sizing: border-box;
		padding: 0 32rpx;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		.title {
			padding-top: 24rpx;
			padding-bottom: 23rpx;
			text-align: center;
			border-bottom: 2rpx solid rgba(0, 0, 0, 0.1);
			font-size: 32rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
		}
		.content {
			flex: 1;
			// background-color: #f00;
			padding: 27rpx 0 8rpx;
		}
		.footer {
			display: flex;
			padding: 48rpx 0;
			justify-content: space-between;
			button {
				width: 328rpx;
				height: 90rpx;
				background: #cccccc;
				border-radius: 44rpx;
				box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0, 0, 0, 0.29);
				font-size: 32rpx;
				font-family: PingFangSC, PingFangSC-Semibold;
				font-weight: 600;
				color: #ffffff;
				line-height: 90rpx;
				&.comfirm {
					background: #ff8300;
					box-shadow: 0rpx 4rpx 8rpx 0rpx #ff9022;
				}
				&::after {
					display: none;
				}
			}
		}
	}
}
</style>
