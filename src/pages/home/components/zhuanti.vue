<template>
			 <box>
				<div class="bigtitle">
					专题介绍
				</div>
				<div class="zhuanti">
					<div class='big'>
						<div class="title">
							<img src="/static/images/index/xiongxiaowu.png" alt="" class='liaojie'>
							了解熊小武
							<p>武馆介绍</p>
						</div>
						
					</div>
					<div class='smalls'>
						<div class='small'>
							<div class="title">
								<img src="/static/images/index/info.png" alt="">
								课程介绍
								<p>武馆课程</p>
								
							</div>
						</div>
						<div class='small'>
							<div class="title">
								<img src="/static/images/index/beta.png" alt="">
								体验课
								<p>预约体验课</p>
								
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
.zhuanti{
	display: grid;
	width:686upx;
	grid-template-columns: 330upx auto;
	margin-top: 32upx;
	.title{
		font-size: 32upx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		color: #000000;
		letter-spacing: -1px;
		p{
			opacity: 0.4;
			font-size: 24upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			color: #000000;
			padding-top: 4upx;
		}
	}
	.big{
		width: 314upx;
		height: 304upx;
		background: #ffffff;
		border-radius: 16upx;
		box-shadow: 0px 4upx 16upx 0px #f8ecdf;
		position: relative;
		box-sizing: border-box;
		padding: 32upx;
		img{
		   width: 172upx;
			height: 144upx;
			position: absolute;
			bottom: 30upx;
			right:30upx;
			transform: translateZ(0);
		}
	}
	.smalls{
		display: flex;
        flex-direction: column;
		justify-content: space-between;
	}
	.small{
		width: 352upx;
		height: 142upx;
		background: #ffffff;
		border-radius: 16upx;
		box-shadow: 0px 4upx 16upx 0px #f8ecdf;
		box-sizing: border-box;
		padding: 30upx 34upx;
		position: relative;
		img{
			position: absolute;
			transform: translateZ(0);
			width: 102upx;
			height: 108upx;
			bottom:16upx;
			right:42upx;
		}
	}
	.small:nth-of-type(1){
		img{
			width: 132upx;
			height:80upx;
			bottom:34upx;
			right:21upx;
		}
	}
}
</style>
