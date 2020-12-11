<template>
	<div>
		   <whitepanel>
				<!-- 订单已付款 -->
				<div class="generalorder">
					<order-title  title='已付款' statusTxt="已付款" />
					<order-info />
					<wuguan-info v-model="isOpen" />
				</div>
			</whitepanel>
		
			<whitepanel>
				<!-- 订单未付款 -->
				<div class="generalorder">
					<order-title title='未付款' statusTxt="未付款" />
					<order-info />
                    <btns />
					<wuguan-info v-model="isOpen" />
				</div>
			</whitepanel>

			<whitepanel>
				<!-- 订单已取消 -->
				<div class="generalorder"  >
					<order-title  title='取消的订单' :cancel="cancel" statusTxt="已取消"/>
					<order-info />
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
.generalorder {
	padding: 32rpx 32rpx 23rpx 32rpx;

}
</style>
