<template>
	<div class="wuguaninfo" :class="{ open: value }">
		<p>所属武馆: {{item.branch_title}}</p>
		<p>下单时间:{{item.order_create_time}}</p>
		<p>订单号:{{item.uid}}</p>
		<span class="more" @click="open" ><img src="/static/images/my/down.svg" alt="" /></span>
	</div>
</template>

<script>
	export default {
         props:{
			 item:{
				 default:()=>({})
			 }
		 },
		 data(){
			 return{
				 value:false
			 }
		 },
		 methods:{
			 open(){
				this.value = !this.value
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
