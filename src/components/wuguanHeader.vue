<template>
	<div class="header" :class="{ show: open, hide: !open }">
		<div class="img"></div>
		<div class="info">
			<div class="row">
				<div class="title">熊小武青少年武馆</div>
				<div class="switchBtn">切换武馆</div>
			</div>
			<div class="row">
				<div class="subtitle" :class="{ open: open }" @click="open = !open">
					更多武馆信息
					<span class="iconfont iconxiaosanjiaodown"></span>
				</div>
				<div class="juli">距离您200米</div>
			</div>
		</div>
		<div class="moreinfo" @touchmove.prevent @mousewheel.prevent>
			<box class="box">
				<div class="address">
					<span class="iconfont iconlocation"></span>
					上海市浦东新区杨浦镇康桥路175号-2幢3层
				</div>
				<div class="address">
					<span class="iconfont iconPhone"></span>
					021-86543245
				</div>
				<div class="address">
					<span class="iconfont iconshop"></span>
					11:00-24:00(周一至周日)
				</div>
				<div class="smalltitle">武馆照片</div>
				<movable-area style="width: auto;height: 150upx; margin-bottom: 32upx;">
					<movable-view style="height:150upx; width:auto;" animation scroll-x direction="horizontal" inertia="true" out-of-bounds>
						<div class="photos">
							<div class="photo"></div>
							<div class="photo"></div>
							<div class="photo"></div>
							<div class="photo"></div>
							<div class="photo"></div>
						</div>
					</movable-view>
				</movable-area>
			</box>
			<div class="mask" @click='open=false'></div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			open: false
		};
	}
};
</script>

<style scoped lang="scss">
.header {
	height: 254upx;
	background-color: #fff;
	padding: 46upx 26upx;
	box-sizing: border-box;
	display: flex;
	.img {
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		background-color: #f00;
	}
	.box {
		background-color: #fff;
		padding-top: 0;
	}
	.info {
		flex: 1;
		padding-left: 28upx;
		display: flex;
		flex-direction: column;
		.row {
			display: flex;
			justify-content: space-between;
			.title {
				font-size: 36upx;
				font-family: PingFangSC, PingFangSC-Semibold;
				font-weight: 600;
				text-align: left;
				color: #000000;
			}
			.switchBtn {
				width: 144upx;
				height: 52upx;
				border: 2upx solid #ff9022;
				border-radius: 32upx;
				font-size: 24upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #ff8300;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.subtitle {
				opacity: 0.5;
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;
				margin-top: 10upx;
				.iconxiaosanjiaodown {
					font-size: 36upx;
					vertical-align: middle;
					transform: rotate(0deg);
					transition: all 1s;
				}
				&.open {
					.iconxiaosanjiaodown {
						transform: rotate(180deg);
					}
				}
			}
			.juli {
				opacity: 0.5;
				font-size: 20upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;
				line-height: 28upx;
				margin-top: 10upx;
			}
		}
	}
	&.show {
		position: relative;
		z-index: 5;
		.moreinfo {
			position: absolute;
			height: 100vh;
			width: 100vw;
			top: 200upx;
			left: 0;
			z-index: 10;
			display: flex;
			flex-direction: column;
			.mask {
				flex: 1;
				background: rgba(0, 0, 0, 0.4);
			}
			.address {
				background-color: #fff;
				opacity: 0.8;
				font-size: 24upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 500;
				color: #000000;
				margin-bottom: 20upx;
				.iconfont {
					vertical-align: middle;
					padding-right: 20upx;
					font-weight: 600;
				}

				.smalltitle {
					background-color: #fff;
					margin-top: 28upx;
					font-size: 28upx;
					font-family: PingFangSC, PingFangSC-Medium;
					font-weight: 600;
					color: #000000;
				}
			}
		}

	}
	&.hide {
		.moreinfo {
			display: none;
		}
	}

	.photos {
		display: flex;
		margin-top: 32upx;
	}
	.photo:not(:nth-of-type(1)) {
		margin-left: 20upx;
	}
	.photo {
		width: 300upx;
		height: 150upx;
		background: rgba(255, 255, 255, 1);
		background-color: #000;
		box-shadow: 0px 4upx 16upx 0px rgba(248, 236, 223, 1);
		border-radius: 16upx;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		.info {
			flex: 1;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
			}
		}
	}
}
</style>
