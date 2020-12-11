<template>
	<div>
	
			<whitepanel>
				<!-- 订单已付定金 -->
				<div class="grouporder">
					<order-title>
						随便写点
						<template slot="status" >
							<p>拼团进行中</p>
							<p>已付定金</p>
						</template>
					</order-title>
					<order-info type="group" />

					<div class="activateInfo">
						<div class="time">活动结束时间:2时15分45秒</div>
						<div class="groupnums">123人参团</div>
					</div>
					<wuguan-info v-model="isOpen" />
				</div>
			</whitepanel>

	
			<whitepanel>
				<!-- 订单已付款 -->
				<div class="grouporder">
					<order-title title="团购">
						<template slot="status" >
							<p>拼团成功</p>
							<p>已付全款</p>
						</template>
					</order-title>
					<order-info type="group" />
					<div class="activateInfo">
						<div class="groupnums">123人参团</div>
						<div class="weikuan">
							<span>
								尾款:
								<img src="/static/images/my/pricesymblo.svg" alt="" style="height:24rpx;width: 20rpx;" />
								37
							</span>
						</div>
					</div>
					<wuguan-info v-model="isOpen" />
				</div>
			</whitepanel>

			<whitepanel>
				<!-- 订单付尾款 -->
				<div class="grouporder">
					<order-title title="团购">
						<template slot="status" >
							<p>拼团成功</p>
							<p>待付尾款</p>
						</template>
					</order-title>
					<order-info type="group" />
					<div class="activateInfo">
						<div class="groupnums">123人参团</div>
						<button>付尾款</button>
					</div>
					<wuguan-info v-model="isOpen" />
				</div>
			</whitepanel>

			<whitepanel>
				<!-- 订单未完成 -->
				<div class="grouporder ">
					<order-title title="团购" :cancel="cancel">
						<template slot="status"  >
							<p>拼团未完成</p>
						</template>
					</order-title>
					<order-info type="group" />
					<div class="activateInfo">
						<div class="groupnums">123人参团</div>	
					</div>
					<wuguan-info v-model="isOpen" />
				</div>
			</whitepanel>

	</div>
</template>

<script>
import orderTitle from './title';
import orderInfo from './info';
import wuguanInfo from './wuguan';
import btns from './btns';
export default {
	components: {
		orderTitle,
		orderInfo,
		wuguanInfo,
		btns
	},
	props: {
		status: '未付款'
	},
	data() {
		return {
			isOpen: false,
			cancel: true
		};
	},
	methods: {
		open() {
			this.isOpen = !this.isOpen;
		}
	}
};
</script>

<style lang="scss" scoped>
.grouporder {
	padding: 32rpx 32rpx 23rpx 32rpx;
	.activateInfo {
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
		.time {
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			color: #ff9022;
			text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176, 176, 176, 0.5);
		}
		.groupnums {
			opacity: 0.6;
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #000000;
			text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176, 176, 176, 0.5);
		}
		.weikuan {
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			color: #000000;
			text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176, 176, 176, 0.5);
		}
		button {
			margin: 0;
			width: 144rpx;
			height: 52rpx;
			border: 2rpx solid #ff8300;
			border-radius: 32rpx;
			box-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176, 176, 176, 0.5);
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 500;
			color: #ff8300;
			line-height: 2;
			text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176, 176, 176, 0.5);
			background-color: #fff;
			&::after {
				display: none;
			}
		}
	}
}
</style>
