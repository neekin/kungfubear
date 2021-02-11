<template>
	<div>
<!-- 		branch_course_name: "课程"
		branch_id: "38B24BAA4935D3C3F9AA7B42C4009998"
		branch_name: "第二个的武馆"
		course_end_time: "09:35:00"
		course_start_date: "2021-01-31"
		course_start_time: "09:00:00"
		course_type: "1"
		course_type_title: "大课"
		make_id: "2FD64EDA299ABBD0DF21177B79DB1490"
		make_status: 0
		obj_id: "F1B464765DB1983F353923BAD7D4150B"
		plan_type: 1
		staff_title: "我是第二个教练" -->
		<!-- 已预约 -->
		<whitepanel v-for='item in list' :key='item.make_id'>
			<div class="yueke">
				<Title :tag="item.course_type_title">{{item.branch_course_name}}
				<span slot='status'>{{item.make_status | status }}</span>
				</Title>
				<div class="time">
					上课时间: {{item.course_start_date}} &nbsp; &nbsp; &nbsp;{{item.course_start_time | times}}-{{item.course_end_time | times}}
				</div>
				<div class="shifu">
				  师傅:{{item.staff_title}} &nbsp; &nbsp; &nbsp; 课时:3
				</div>
				<div class="time2">
					预约时间: {{2020-11-28}} 08:23:24
					<button type="default" @click='cancel(item)' v-if='item.make_status===0'>取消预约</button>
				</div>
				<div class="wuguan">所属武馆: {{item.branch_name}}
				<img src="/static/images/my/down.svg" alt="" />
				</div>
			</div>
		</whitepanel>
		<!-- 已完成 -->
<!-- 		<whitepanel>
			<div class="yueke done">
				<Title tag="私教课">武馆大课程 扎马步练习asdf adsasd
				<span slot='status'>已完成</span>
				</Title>
				<div class="time">
					上课时间: 2020-12-01 &nbsp; &nbsp; &nbsp;10:00-11:00
				</div>
				<div class="shifu">
				  师傅:张三丰 &nbsp; &nbsp; &nbsp; 课时:3
				</div>
				<div class="time2">
					预约时间: 2020-11-28 08:23:24
					<button type="default">取消预约</button>
				</div>
				<div class="wuguan">上课武馆: 武小熊青少年武馆
				<img src="/static/images/my/down.svg" alt="" />
				</div>
			</div>
		</whitepanel> -->
		<!-- 已取消 -->
<!-- 		<whitepanel>
			<div class="yueke">
				<Title tag="私教课" cancel='true'>武馆大课程 扎马步练习asdf adsasd
				<span slot='status'>已取消</span>
				</Title>
				<div class="time">
					上课时间: 2020-12-01 &nbsp; &nbsp; &nbsp;10:00-11:00
				</div>
				<div class="shifu">
				  师傅:张三丰 &nbsp; &nbsp; &nbsp; 课时:3
				</div>
				<div class="time2">
					预约时间: 2020-11-28 08:23:24
					<button type="default">取消预约</button>
				</div>
				<div class="wuguan">上课武馆: 武小熊青少年武馆
				<img src="/static/images/my/down.svg" alt="" />
				</div>
			</div>
		</whitepanel> -->
	</div>


</template>

<script>
import Title from './title';
export default {
	filters:{
		status(val){
			switch(val){
				case 0:
				 return "已预约"
				 case 1:
				   return "已完成"
				   case 2:
				    return "已取消"
			}
		}
	},
	mounted(){
		console.log(this.list)
	},
	methods:{
		cancel(item){
			this.$emit('setItem',item)
		}
	},
	props:{
		list:{
			default:()=>[]
		}
	},
	model:{
		prop:"list",
		event:'change'
	},
	components: {
		Title
	},
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
.yueke {
	padding: 36rpx 36rpx 20rpx;
	&.done{
		/deep/.title{
			.status{
				color:rgba(43,191,27,1);
			}
		}
	}

	.time{
		opacity: 0.7;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 34rpx;
		text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176,176,176,0.5); 
		margin-top: 16rpx;
	}
	.shifu{
		opacity: 0.7;
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		// line-height: 38rpx;
		text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176,176,176,0.5); 
		margin-top: 16rpx;
		margin-bottom: 38rpx;
	}
	.time2{
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(0,0,0,0.4);
		text-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176,176,176,0.5); 
		display: flex;
		position: relative;
		border-bottom: 2rpx solid rgba(0,0,0,0.1);
		padding-bottom: 28rpx;
		button{
			position: absolute;
			width: 160rpx;
			height: 52rpx;
			line-height: 2;
			border: 2rpx solid rgba(0,0,0,0.4);
			border-radius: 26rpx;
			box-shadow: 0rpx 0rpx 12rpx 2rpx rgba(176,176,176,0.5); 
			right:0;
			top:-12rpx;
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 500;
			text-align: center;
			color: rgba(0,0,0,0.4);
			&::after{
				display: none;
			}
		}
	}
	.wuguan {
		font-size: 24rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: rgba(0, 0, 0, 0.6);
		margin-top: 24rpx;
		position: relative;
		img{
			transform: rotate(270deg);
			width: 18rpx;
			height: 18rpx;
			position: absolute;
			right:0;
			top:6rpx;
		}
	}
}
</style>
