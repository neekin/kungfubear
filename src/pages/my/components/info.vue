<template>
	<div>
		<div class="info">
			课时: {{item.branch_course_amount}} 课程时间:{{item.course_duration}}
			<div class="money" :class="{ group: type == 'group' }">
				<template v-if="type == 'general'">
					<span>
						<img src="/static/images/my/pricesymblo.svg" alt="" />
						{{item.order_need_price}}
					</span>
				</template>
				<template v-if="type == 'group'">
					<span>
						定金:
						<img src="/static/images/my/pricesymblo.svg" alt="" />
						{{item.order_need_price}}
					</span>
				</template>
			</div>
		</div>
		<div class="expirday">有效期: 2020-10-01 至 2020-12-31</div>
	</div>
</template>

<!-- branch_course_amount: 10
		branch_course_title: "测试购买一般课程"
		branch_id: "38B24BAA4935D3C3F9AA7B42C4009998"
		branch_title: "test"
		course_duration: 50
		course_title: "测试第一节课"
		order_create_time: "2021-01-26 16:16:11"
		order_goods_id: "E847BA127AFB32C8CAB760A2C4988932"
		order_need_price: "0.01"
		order_pay_time: null
		order_status: 0
		order_type: 0
		uid: "A402CCE099AE8CF67B12A4F0894DDAE1" -->

<script>
export default {
	props: {
		item:{
			default:()=>({})
		},
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
