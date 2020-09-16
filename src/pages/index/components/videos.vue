<template>
			 <box>
				<div class="bigtitle">
					功夫秀场
				</div>
				<movable-area style="width: auto;height: 344upx; margin-bottom: 32upx;">
					<movable-view style="height:344upx; width:auto;" animation scroll-x direction="horizontal" inertia="true" out-of-bounds>
						<div class="videos">
							<!-- <div class="video" v-for="(item, index) in show_times" :key="index">
								<div class="info"><video :src="item.format_video" controls></video></div>
								<div class="title">{{ item.title }}</div>
							</div> -->
							<div class="video"></div>
							<div class="video"></div>
							<div class="video"></div>
							<div class="video"></div>
							<div class="video"></div>
						</div>
					</movable-view>
				</movable-area>
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
.videos {
	display: flex;
	margin-top: 32upx;
}
.video:not(:nth-of-type(1)) {
	margin-left: 20upx;
}
.video {
	width: 490upx;
	height: 344upx;
	background: rgba(255, 255, 255, 1);
	background-color: #ccc;
	box-shadow: 0px 4upx 16upx 0px rgba(248, 236, 223, 1);
	border-radius: 16upx;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	.info {
		flex: 1;
		overflow: hidden;
		video {
			width: 100%;
			height: 100%;
		}
	}
	.title {
		font-size: 16px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: rgba(0, 0, 0, 1);
		height: 92upx;
		padding-left: 30upx;
		line-height: 92upx;
	}
}
</style>
