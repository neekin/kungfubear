<template>
	<scroll-view scroll-y="true" class='myorders' >
		<!-- 订单已付款 -->
		   <whitepanel v-for='item in list' :key='item.uid'>
				<div class="generalorder">
					<order-title  :title='item.branch_course_title' :cancel="item.order_status===2?'cancel':''" :statusTxt="item.order_status | status" />
					<order-info :item='item'/>
					  <btns  v-if='item.order_status===0' :item='item' />
					<wuguan-info :item='item'/>
				</div>
			</whitepanel>
	</scroll-view>


<!-- 		branch_course_amount: 10
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
		
		<!-- 订单未付款 -->
<!-- 			<whitepanel>
				<div class="generalorder">
					<order-title title='未付款' statusTxt="未付款" />
					<order-info />
                    <btns />
					<wuguan-info v-model="isOpen" />
				</div>
			</whitepanel> -->
			
			
	<!-- 订单已取消 -->
<!-- 			<whitepanel>
				<div class="generalorder"  >
					<order-title  title='取消的订单' :cancel="cancel" statusTxt="已取消"/>
					<order-info />
					<wuguan-info v-model="isOpen" />
				</div>
			</whitepanel> -->
</template>

<script>
import orderTitle from './title';
import orderInfo from './info';
import wuguanInfo from './wuguan';
import btns from './btns';
export default {
	filters:{
		status(value){
			console.log('zhuangt',value)
			switch(value){
				case 0:
				   return '未支付';
				case 1:
				    return "已付款";
				case 2:
				    return "已取消"
			}
			
		}
	},
	components: {
		orderTitle,
		orderInfo,
		wuguanInfo,
		btns
	},
	props: {
		status: '未付款',
		list:{
			default:()=>[]
		}
	},
	data() {
		return {
			isOpen: false,
			cancel: true
		};
	},
	methods: {
	}
};
</script>

<style lang="scss" scoped>

.myorders{
	flex: 1;
	overflow: hidden;
	.generalorder {
		padding: 32rpx 32rpx 23rpx 32rpx;
	}
	height: 1100rpx;
}
</style>
