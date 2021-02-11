<template>

		<whitepanel>
			<div class="keshi">
				<keshi-title :tag="item.amount_type">{{item.branch_course_name}}</keshi-title>
				<div class="info">
					<span>总计课时:{{item.amount}}</span>
					<span>剩余课时:{{item.un_amount}}</span>
					<span>冻结课时:{{item.lock_amount}}</span>
				</div>
				<div class="wuguan">{{item.branch_name}}</div>
			</div>
		</whitepanel>

</template>

<script>
import keshiTitle from './title';
export default {
	components: {
		keshiTitle
	},
	props:{
		item:{
			default:()=>({})
		}
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
