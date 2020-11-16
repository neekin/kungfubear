<template>
	<div class='shifu' :class='isShow?"show":""'  @click.stop='close'>
		<div class="shifuinfo" @click.stop='stop'>
			<div class="title">
			师父介绍
				<div class="close" @click.stop='close'></div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			shifu:{
				default:()=> null
			}
		},
		model:{
			prop:'shifu',
			event:'update'
		},
		methods:{
			close(){
				this.$emit('update',null)
			},
			stop(e){
					e.stopPropagation()
			}
		},
		computed:{
			isShow(){
				return this.shifu !== null
			}
		}
	}
</script>

<style lang="scss" scoped>
.hide.shifu{
	.shifuinfo{
		width: 750upx;
		height: 854upx;
		background: #ffffff;
		border-radius: 16upx 16upx 0upx 0upx;
		position: absolute;
		transform: translateZ(0) translateY(854upx);
		bottom: 0;
	}
}
.show.shifu{
	height: 100vh;
	width: 100vw;
	background-color: rgba(0,0,0,0.2);
	position: fixed;
	top:0;
	left:0;
	z-index: 9999;
	.shifuinfo{
		width: 750upx;
		height: 854upx;
		background: #ffffff;
		border-radius: 16upx 16upx 0upx 0upx;
		position: absolute;
		transform: translateZ(0) translateY(0);
		bottom: 0;
		transition: transform 0.5s;
		.title{
			height:107upx;
			line-height: 107upx;
			border-bottom: 2upx solid #979797;
			font-size: 32upx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			color: #000000;
			text-align: center;
			position: relative;
			.close{
				width: 34upx;
				height: 34upx;
				background-color: #000;
				position: absolute;
				right:35upx;
				bottom: 30upx;
				
			}
		}
	}
}
</style>
