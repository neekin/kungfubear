<template>

		<whitepanel>
			<div class="keshi">
				<keshi-title tag="私教课">武馆大课程 扎马步练习asdfsasdasdf</keshi-title>
				<div class="info">
					<span>总计课时:10</span>
					<span>剩余课时:5</span>
					<span>冻结课时:5</span>
				</div>
				<div class="wuguan">所属武馆: 武小熊青少年武馆</div>
			</div>
		</whitepanel>

</template>

<script>
import keshiTitle from './title';
export default {
	components: {
		keshiTitle
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.keshi {
	padding: 36rpx 36rpx 20rpx;
	.info {
		margin-top: 16rpx;
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(0, 0, 0, 0.7);
		padding-bottom: 45rpx;
		border-bottom: 1px solid rgba(0, 0, 0, 0.1);
		span {
			margin-right: 48rpx;
		}
		span:nth-of-type(2) {
			color: #ff8300;
		}
		span.red {
			color: #ff4d39;
		}
	}
	.wuguan {
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(0, 0, 0, 0.6);
		margin-top: 20rpx;
	}
}
</style>
