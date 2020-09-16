<template>
	<box class='map-box'>
		<div class="map-card">
			<div class="title">
						 熊小武青少年武馆
			</div>
			<div class="info">
						<img src="/static/images/wuguan/t.jpg" alt="" class='wuguanimg'>
						<div class="link">
							 <div class="address">
								<span class='iconfont iconlocation'></span>
								<p>上海市浦东新区杨浦镇康桥路175号-康桥商务酒店大厦</p>
							 </div>
							 <div class="phone">
								 <span class='iconfont iconPhone'></span>
								 <p>020-123456789</p>
							 </div>
							 <div class="dis">
								 43KM
							 </div>
						</div>
			</div>
			<div class="gothere">
				<img src="/static/images/wuguan/gothere.png" alt="" >
				<span>到这里</span>
			</div>
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
.map-box{
	position: absolute;
	bottom: 300upx;
}
.map-card{
	width: 686upx;
	height: 292upx;
	background: #ffffff;
	border-radius: 16upx;
	position: relative;
	padding: 32upx;
	box-sizing: border-box;
	.title{
		font-size: 36upx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		color: #000000;
	}
	.info{
		display: grid;
		grid-template-columns: 332upx auto;
		margin-top: 20upx;
	}
	.wuguanimg{
		width: 316upx;
		height:158upx;
	}
	.link{
		position: relative;
		.dis{
			position: absolute;
			opacity: 0.3;
			font-size: 24upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #000000;
			line-height: 34upx;
			letter-spacing: 0upx;
			bottom: -12upx;
			right:0;
			transform: translateZ(0);
		}
	}
	.address{
		display: flex;
		align-items: flex-start;
		p{
			padding-left: 6upx;
			opacity: 0.8;
			font-size: 24upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #000000;
			line-height: 34upx;
			letter-spacing: 0upx;
			overflow : hidden;
			text-overflow: ellipsis;
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
		}
	}
	.phone{
		display: flex;
		align-items: center;
		margin-top: 16upx;
		p{
			padding-left: 6upx;
			opacity: 0.8;
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #000000;
			line-height: 40upx;
		}
	}
	.gothere{
		width: 116upx;
		height:116upx;
		position: absolute;
		right:30upx;
		top: -48upx;
		img{
			width: 116upx;
			height:116upx;
		}
		span{
			font-size: 24upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			color: #ffffff;
			transform: translateY(-50%) translateX(-50%) scale(0.8);
			position: absolute;
			top:60%;
			left:50%;
			letter-spacing: 0px;
			width: 100%;
			text-align: center;
		}
	}
}
</style>
