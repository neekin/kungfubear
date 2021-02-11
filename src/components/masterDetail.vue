<template>
	<div class='master' :class='{show:isShow,hide:!isShow}'  @click.stop='close'>
		<div class="masterDetail" @click.stop='stop'>
			<div class="title">
				师父介绍
				<span class="close" @click.stop='close'><img src="/static/images/wuguan/closebtn.png" alt=""></span>
			</div>
			<div class="content">
				<div class="headimg">
					<img :src="master.staff_avatar" alt="">
					<span class="name">{{master.staff_name_cn}}</span>
				</div>
				<div class="text">
					  <rich-text :nodes="master.staff_desc_cn"></rich-text>	
					  <img :src="master.staff_photo" alt="">
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			master:{
				default:()=> null
			}
		},
		model:{
			prop:'master',
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
				return this.master !== null
			}
		}
	}
</script>

<style lang="scss" scoped>
.hide.master{
	display: none;
	.masterDetail{
		width: 750upx;
		height: 854upx;
		background: #ffffff;
		border-radius: 16upx 16upx 0upx 0upx;
		position: absolute;
		transform: translateZ(0) translateY(854upx);
		bottom: 0;
	}
}
.show.master{
	height: 100vh;
	width: 100vw;
	background-color: rgba(0,0,0,0.2);
	position: fixed;
	top:0;
	left:0;
	z-index: 9999;
	.masterDetail{
		width: 750upx;
		height: 854upx;
		background: #ffffff;
		border-radius: 16upx 16upx 0upx 0upx;
		position: absolute;
		transform: translateZ(0) translateY(0);
		bottom: 0;
		transition: transform 0.5s;
		.content{
			display: flex;
			flex-direction: column;
			.headimg{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 25upx 0 30upx 0;
				img{
					width: 116upx;
					height: 116upx;
					border-radius: 110upx;
				}
				.name{
					margin-top: 20upx;
					font-size: 28upx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					color: #000000;
				}
			}
			.text{
				padding: 10upx 32upx;
				overflow-y: auto;
				height:500upx;
				font-size: 32upx;
				font-family: PingFangSC, PingFangSC-Regular;
				text-align: justify;
			}
		}
		.title{
			height:107upx;
			line-height: 107upx;
			border-bottom: 1upx solid rgba(151,151,151,0.2);
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
				position: absolute;
				right:35upx;
				bottom: 30upx;
				img{
					width: 34upx;
					height: 34upx;
					position: absolute;
					left:0;
				}
			}
		}
	}
}
</style>
