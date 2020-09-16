<template>
<box>
	<div class="card">
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
.card{
	width: 686upx;
	height: 292upx;
	background: #fff;
	border-radius: 16upx;
	box-sizing: border-box;
	padding: 32upx;
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
}
</style>
