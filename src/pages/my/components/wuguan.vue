<template>
	<div class="wuguaninfo" :class="{ open: value }">
		<p>所属武馆: 武小熊青少年武馆</p>
		<p>下单时间:2019-12-31 16:44:32</p>
		<p>订单号:1234567890123</p>
		<span class="more" @click="open" ><img src="/static/images/my/down.svg" alt="" /></span>
	</div>
</template>

<script>
	export default {
         props:{
			 value:{
				 default:false
			 }
		 },
		 methods:{
			 open(){
				 this.$emit('input',!this.value)
			 }
		 }
	};
</script>

<style lang="scss" scoped>
.wuguaninfo {
	border-top: 2rpx solid rgba(0, 0, 0, 0.2);
	padding-top: 24rpx;
	font-size: 24rpx;
	font-family: PingFangSC, PingFangSC-Regular;
	font-weight: 400;
	text-align: left;
	colod: rgba(0, 0, 0, 0.6);
	position: relative;
	overflow: hidden;
	max-height: 34rpx;
	transition: all 0.5s;
	&.open {
		height: auto;
		max-height: 150rpx;
		.more {
			img {
				transform: rotate(180deg);
			}
		}
	}
	p {
		margin-bottom: 9rpx;
	}
	.more {
		position: absolute;
		width: 80rpx;
		height: 60rpx;
		right: 0;
		top: 24rpx;
		img {
			position: absolute;
			top: 0;
			right: 0;
			transition: transform 0.5s;
			width: 33rpx;
			height: 18rpx;
		}
	}
}
</style>
