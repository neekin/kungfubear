<template>
	<box class="box1">
		<div class="days">
			<div class="header">
				<span>{{dayfix}}{{month}}月{{date}}日 {{weekday}}</span>
				<span>123</span>
			</div>
			<div class="daylist">
				<movable-area style="width: auto;height: 118upx; margin-top:16rpx">
					<movable-view style="height:118upx; width:auto;" animation scroll-x direction="horizontal" inertia="true" out-of-bounds>
						<div class="list">
				                <day v-for='date in listDay' :key='date' :date='date'/>
						</div>
					</movable-view>
				</movable-area>
			</div>
		</div>
	</box>
</template>

<script>
	import isToday  from 'dayjs/plugin/isToday'
	import isTomorrow from 'dayjs/plugin/isTomorrow'
	import dayjs from 'dayjs'
	import { mapGetters } from 'vuex'
	import day from './day'
	dayjs.extend(isToday)
	dayjs.extend(isTomorrow)
	export default{
	computed:{
		...mapGetters('Appointment',["getDate"]),
		month(){
			return dayjs(this.getDate).month()+1
		},
		date(){
			return dayjs(this.getDate).date()
		},
		dayfix(){
			if(dayjs(this.getDate).isToday()){
				return '今'
			}
			if(dayjs(this.getDate).isTomorrow()){
				return '明'
			}
                return ''
		},
		weekday() {
			let day = dayjs(this.getDate).day();
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
	},
		data(){
			return {
				listDay:[],
			}
		},
		components:{
			day
		},
	   created(){
		  let temApp = []
		  for(let i =0;i<15;i++){
			 temApp.push(dayjs().add(i,'day').format('YYYY-MM-DD'))
		  }
		  this.listDay = temApp
	   }
	}
</script>

<style scoped lang="scss">
.days {
	height: 242rpx;
	opacity: 1;
	background: #ffffff;
	border-radius: 20rpx;
	box-shadow: 0rpx 6rpx 26rpx 0rpx rgba(150, 87, 73, 0.09);
	position: absolute;
	width: 710rpx;
	left: 50%;
	transform: translateX(-50%);
	top: 178rpx;
	padding: 32rpx;
	box-sizing: border-box;
	font-family: PingFangSC, PingFangSC-Semibold;
	overflow: hidden;
	.header {
		font-size: 32rpx;
		color: rgba(0, 0, 0, 0.65);
		font-weight: 600;
		display: flex;
		justify-content: space-between;
	}
	.list {
		display: flex;
	}
}
</style>
