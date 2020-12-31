<template>
	<box>
		<div class="infoTab">
<!-- 			<div class="btn" :class="value === 0 ? 'active' : ''" " @click="actThis(0)><span>体适能</span></div>
			<div class="btn" :class="value === 1 ? 'active' : ''" @click="actThis(1)"><span>功夫</span></div>
			<div class="btn" :class="value === 2 ? 'active' : ''" @click="actThis(2)"><span>拳击</span></div>
			<div class="btn" :class="value === 3 ? 'active' : ''" @click="actThis(3)"><span>私教课</span></div> -->
			<div v-for='item in types' :key='item.uid' class='btn' :class='{active:value ===item.uid}' @click="actThis(item.uid)">
				<span>{{item.cate_name_cn}}</span>
			</div>
		</div>
	</box>
</template>

<script>
export default {
	props: {
		value: {
			default: 0
		}
	},
	model: {
		prop: 'value',
		event: 'input'
	},
	data() {
		return {
			types: [
				{
					uid: '39B18EEE5AA7AB10E9F59375C6154075',
			
					cate_name_cn: '体能课',
			
					cate_type: 1
				},
			
				{
					uid: '5F16E53BC241F3433081AFCC8849B5F3',
			
					cate_name_cn: '功夫',
			
					cate_type: 1
				},
			
				{
					uid: 'B9A7D34691CF289883D68D28EEC26025',
			
					cate_name_cn: '拳击',
			
					cate_type: 1
				},
			
				{
					uid: '44B655915355352F759018E796FD9EDE',
			
					cate_name_cn: '私教课',
			
					cate_type: 2
				}
			]
		};
	},
	methods: {
		actThis(index) {
			this.$emit('input', index);
		}
	}
};
</script>

<style lang="scss" scoped>
.infoTab {
	display: flex;
	width: 688upx;
	height: 122upx;
	background: #ffffff;
	border-radius: 16upx;
	box-shadow: 0px 0px 12upx 2upx rgba(176, 176, 176, 0.5);
	justify-content: space-between;
	padding: 0 60upx;
	box-sizing: border-box;
	.btn {
		display: flex;
		justify-items: center;
		align-items: center;
		height: 122upx;
		box-sizing: border-box;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 400;
		color: #000000;
	}
	.btn.active {
		font-weight: 500;
		color: #ff9022;
		span {
			position: relative;
		}
		span:after {
			content: '';
			position: absolute;
			width: 40upx;
			height: 6upx;
			background: #ff9022;
			border-radius: 6upx;
			bottom: -6upx;
			left: 50%;
			transform: translateX(-50%);
		}
	}
}
</style>
