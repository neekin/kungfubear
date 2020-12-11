<template>
	<layout>
		<tabs v-model="selected" :list="children" />
		<filter-btns />
		<yuekeOrder />
		<actionsheet title='确定取消预约?'>
			<div class="stitle">取消原因</div>
				<wxx-checkbox>病假</wxx-checkbox>
				<wxx-checkbox>事假</wxx-checkbox>
				<wxx-checkbox>临时学校活动冲突</wxx-checkbox>
				<wxx-checkbox>以上都不是</wxx-checkbox>
			<textarea value="" placeholder="恳请填写具体原因" />
		</actionsheet>
	</layout>
</template>

<script>
import filterBtns from '../components/filterbtns';
import yuekeOrder from '../components/yuekeorder';
import wxxCheckbox from '@/components/wxxcheckbox.vue';
export default {
	components: {
		filterBtns,
		yuekeOrder,
		wxxCheckbox
	},
	data() {
		return {
			selected: '二狗子',
			children: ['二狗子', '三毛'],
			
		};
	}
};
</script>

<style lang="scss" scoped>
	.stitle{
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		color: rgba(0,0,0,0.65);
	}
	textarea{
		width: 678rpx;
		height: 176rpx;
		background:rgba(0,0,0,0.02) ;
		border-radius: 8rpx;
		padding: 24rpx 24rpx 0;
		box-sizing: border-box;
		color:#000;

	}
</style>
