<template>
	<div>
		<div class="info">
			课时: 10 课程时间:1小时/课时
			<div class="money" :class="{ group: type == 'group' }">
				<template v-if="type == 'general'">
					<span>
						<img src="/static/images/my/pricesymblo.svg" alt="" />
						37
					</span>
				</template>
				<template v-if="type == 'group'">
					<span>
						定金:
						<img src="/static/images/my/pricesymblo.svg" alt="" />
						37
					</span>
				</template>
			</div>
		</div>
		<div class="expirday">有效期: 2020-10-01 至 2020-12-31</div>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			default: 'general'
		}
	}
};
</script>

<style lang="scss" scoped>
.info {
	display: flex;
	font-size: 28rpx;
	font-family: PingFangSC, PingFangSC-Regular;
	font-weight: 400;
	margin-top: 14rpx;
	color: rgba(0, 0, 0, 0.7);
	justify-content: space-between;
	position: relative;
	.money {
		span {
			font-size: 28rpx;
			font-family: DINAlternate, DINAlternate-Bold;
			font-weight: 700;
			text-align: left;
			color: #000000;
			img {
				width: 12rpx;
				height: 20rpx;
			}
		}
		&.group {
			position: absolute;
			top: 20rpx;
			right: 0;
			span {
				display: flex;
				align-items: center;
				font-size: 20rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;
				img {
					width: 18rpx;
					height: 26rpx;
					vertical-align: middle;
				}
			}
		}
	}
}
.expirday {
	margin-top: 7rpx;
	font-size: 24rpx;
	font-family: PingFangSC, PingFangSC-Regular;
	font-weight: 400;
	text-align: left;
	color: rgba(0, 0, 0, 0.6);
	padding-bottom: 46rpx;
}
</style>
