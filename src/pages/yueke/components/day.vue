<template>
	<div class="day" :class="{ selected: selected }" @click.native='selectDay'>
		<div class="weekday">{{ weekday }}</div>
		<div class="infoday">{{ infoday }}</div>
	</div>
</template>

<script>
import dayjs from 'dayjs';
import { mapGetters,mapActions } from 'vuex';
export default {
	props: {
		date: {
			default: ''
		}
	},
	data() {
		return {};
	},
	methods:{
		...mapActions('Appointment', ['setDate']),
		selectDay(){
			this.setDate(this.date)
		}
	},
	computed: {
		...mapGetters('Appointment', ['getDate']),
		weekday() {
			let day = dayjs(this.date).day();
			switch (day) {
				case 0:
					return '星期天';
				case 1:
					return '星期一';
				case 2:
					return '星期二';
				case 3:
					return '星期三';
				case 4:
					return '星期四';
				case 5:
					return '星期五';
				case 6:
					return '星期六';
			}
		},
		infoday() {
			return dayjs(this.date).date();
		},
		selected() {
			return this.getDate === this.date;
		}
	}
};
</script>

<style lang="scss" scoped>
.day {
	width: 116rpx;
	height: 118rpx;
	opacity: 1;
	background: rgba(0, 0, 0, 0.03);
	border-radius: 16rpx;
	margin-left: 12rpx;
	display: flex;
	flex-direction: column;
	padding: 18rpx 0;
	box-sizing: border-box;
	.weekday {
		opacity: 1;
		font-size: 18rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		color: #909399;
		line-height: 24rpx;
		letter-spacing: 0rpx;
		text-align: center;
	}
	.infoday {
		opacity: 1;
		font-size: 60rpx;
		font-family: DINAlternate, DINAlternate-Bold;
		font-weight: 700;
		text-align: left;
		color: #8f939a;
		letter-spacing: 1rpx;
		text-align: center;
	}
	&.selected {
		background: #ff8300;
		box-shadow: 0rpx 4rpx 8rpx 0rpx #ff9022;
		.weekday,
		.infoday {
			color: #fff;
		}
	}
}
</style>
