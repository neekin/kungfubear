<template>
	<layout>
		<div class="bg"></div>
		<banner />
		<box>
			<div class="info">
				<div class="title">
					熊小武青少年武馆
				</div>
				<div class="address">
					<span class='iconfont iconlocation'></span>
					<p>上海市浦东新区杨浦镇康桥路175号-康桥商务酒店大厦
						<span class="dis">
											 43KM
						</span>
					</p>
					
				</div>
				<div class="phone">
									 <span class='iconfont iconPhone'></span>
									 <p>020-123456789</p>
				</div>
				<div class="time">
					<span class='iconfont iconshop'></span>
					 <p>11:00-24:00</p>
				</div>
				<div class="btns">
					<div class="btn">
						<span class='iconfont iconclock'></span>约课
					</div>
					<div class="btn">
						<span class='iconfont icongouwuche'></span>购课
					</div>
				</div>
			</div>
		</box>
         <info-tab />
	</layout>
</template>

<script>
	import banner from './components/banner.vue'
	import infoTab from './components/infoTab.vue'
	export default {
		components:{
			banner,
			infoTab
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
.bg{
	background-color:#FF8300;
	height:214upx;
	width: 100%;
	position: absolute;
	top:0;
}
.info{
	width: 686upx;
	height: 252upx;
	.title{
		width: 288upx;
		height: 50upx;
		font-size: 36upx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		color: #000000;
		line-height: 50upx;
	}
	.address{
		display: flex;
		height: 34upx;
		opacity: 0.8;
		font-size: 24upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 34upx;
		margin-top: 16upx;
		p{
			margin-left: 14upx;
			position: relative;
		}
		.dis{
			position: absolute;
			bottom: -34upx;
			left: 0;
			font-size: 24upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #909399;
			line-height: 34upx;
		}
	}
	.phone{
        display: flex;
		opacity: 0.8;
		font-size: 24upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		margin-top: 56upx;
		p{
		margin-left: 14upx;
		}
	}
	.time{
	   margin-top: 20upx;
		opacity: 0.8;
		font-size: 24upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 34upx;
		display: flex;
		p{
		margin-left: 14upx;
		}
	}
	position: relative;
	.btns{
		position: absolute;
		display: flex;
		bottom: 0;
		right:0;
		.btn{
			width: 136upx;
			height: 52upx;
			display: flex;
			align-items: center;
			background: #ffffff;
			border-radius: 8upx;
			box-shadow: 0upx 6upx 26upx 0upx rgba(150,87,73,0.09); 
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 500;
			text-align: left;
			color: #ff8300;
			line-height: 40upx;
			margin-left: 12upx;
			padding: 0 17upx;
			box-sizing: border-box;
			.iconfont{
				margin-right: 13upx;
			}
		}
	}
}
</style>
