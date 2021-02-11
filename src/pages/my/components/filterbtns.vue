<template>
	<div class="filterBtns">
		<button @click='activeThis(0)' :class="{ active: type == 0 }">今天</button>
		<button @click='activeThis(1)' :class="{ active: type == 1 }">本周</button>
		<button @click='activeThis(2)' :class="{ active: type == 2 }">下周</button>
		<button @click='activeThis(3)' :class="{ active: type == 3 }">历史</button>
	</div>
</template>

<script>
export default {
	props: {
		type: {
			default: 0
		}
	},
	model:{
		prop:'type',
		event:'update'
	},
	methods:{
		activeThis(val){
			this.$emit('update',val)
		}
	}
};
</script>

<style lang="scss" scoped>
.filterBtns {
	padding: 36rpx 120rpx 0;
	display: flex;
	button.active {
		background: rgba(255, 144, 34, 1);
		box-shadow: 0rpx 4rpx 8rpx 0rpx #ff9022;
	}
	button {
		width: 114rpx;
		height: 52rpx;
		line-height: 52rpx;
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		text-align: center;
		color: #ffffff;
		letter-spacing: -1rpx;
		background: rgba(0, 0, 0, 0.2);
		border-radius: 32rpx;
		&::after {
			display: none;
		}
	}
}
</style>
