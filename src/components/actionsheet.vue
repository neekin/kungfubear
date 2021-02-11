<template>
	<div class="actionsheet" v-if='show' @click='cancel'>
		<div
			class="mask"
			@click.stop="
				event => {
					event.stopPropagation();
				}">
			<div class="title" v-if='!hideTitle'>
				<slot name="title">{{ title }}</slot>
			</div>
			<div class="content"><slot></slot></div>
			<div class="footer" v-if='!hideButtons'>
				<slot name="footer">
					<div class="btn" v-if="!hideCancelButton">
						<button  @click='cancel'>{{ cancelButtonText }}</button>
					</div>
					<div class="btn" v-if="!hideComfirmButton">
						<button  class="comfirm" @click="success" >{{ comfirmButtonText }}</button>
					</div>
				</slot>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	model:{
		event:'close',
		prop:'show'
	},
	data(){
		return {
		}
	},
	methods:{
		cancel(){
			this.$emit('close',false)
			if(typeof this.cancelButtonCallback ==='function')
		     	this.cancelButtonCallback.call()
		},
		success(){
				this.$emit('success')
		}
	},
	props: {
		show:{
			type:Boolean,
			default: false
		},
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
			default:  ()=>{}
		},
		comfirmButtonCallback: {
			type: Function,
			default: ()=>{}
		},
		hideCancelButton: {
			default: false
		},
		hideComfirmButton: {
			default: false
		},
		hideClose: {
			default: false
		},
		hideButtons:{
			default: false
		},
		hideTitle:{
			default:false
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
	.mask {
		height: auto;
		width: 100vw;
		background-color: #ffffff;
		border-radius: 16rpx 16rpx 0rpx 0rpx;
		position: absolute;
		bottom: 0;
		box-sizing: border-box;
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
			.btn{
				padding: 0 32rpx;
				flex:1;
				button {
					width: 100%;
					height: 90rpx;
					background: #cccccc;
					border-radius: 44rpx;
					box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0, 0, 0, 0.29);
					font-size: 32rpx;
					font-family: PingFangSC, PingFangSC-Semibold;
					font-weight: 600;
					color: #ffffff;
					line-height: 90rpx;
					justify-content: space-between;
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
}
</style>
