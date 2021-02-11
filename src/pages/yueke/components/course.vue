<template>
	<box>
		<div class="course">
			<div class="time">
				{{item.course_start_time | times }} - {{item.course_end_time | times }}
			</div>
			<div class="title">
				{{item.branch_course_title}}
			</div>
			<div class="info">
				<span class="ks">课程时间:{{item.course_duration}}分钟/课时</span><span class="age">年龄范围：{{item.min_age}}-{{item.max_age}}岁</span>
				<div class='rs'>
					<span>{{item.already_number}}</span>/<span>{{item.total_number}}</span><span>人</span>
				    <span class="progress">
						<i :style='{width:Percent}'></i>
					</span>
				</div>
			</div>
			<div class="footer"  v-if='item.total_number===item.already_number'>
			   师父:{{item.main_staff_title}}
			   <button type="default" class='default'>约满</button>
			</div>
			<div class="footer" v-else @click='setItem'>
				 师父:{{item.main_staff_title}}
				  <button type="default" class='success'><span class='iconfont iconicon-test' ></span>预约</button>
			</div>
		</div>
	</box>
</template>

<script>
	export default{
		computed:{
			Percent(){
				return this.item.total_number <= 0 ? "0%" : (Math.round(this.item.already_number / this.item.total_number * 10000) / 100.00)+"%";
			}
		},
		props:['item'],
		methods:{
			setItem(){
				this.$emit('setItem',this.item)
			}
		}
	}
</script>

<style lang='scss' scoped>
	.course{
		width: 686rpx;
		height: 300rpx;
		opacity: 1;
		background: #ffffff;
		border-radius: 20rpx;
		padding: 32rpx;
		box-sizing: border-box;
		position: relative;
		.time{
			opacity: 1;
			font-size: 36rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			color: #ff8300;
		}
		.title{
			opacity: 1;
			font-size: 36rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			color: #000000;
			padding: 12rpx 0;
		}
		.info{
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: rgba(0,0,0,0.7);
			line-height: 34rpx;
			display: flex;
			align-items: center;
		}
		.ks{
			margin-right: 24rpx;
		}
		.rs{
			flex:1;
			display: flex;
			justify-content: flex-end;
			align-items: flex-end;
			position: relative;
		  & span:nth-of-type(1){
			  font-size: 28rpx;
			  font-family: DINAlternate, DINAlternate-Bold;
			  font-weight: 700;
			  color: #ff8300;
		  }
		  & span:nth-of-type(2){
			  font-size: 28rpx;
			  font-family: DINAlternate, DINAlternate-Bold;
			  font-weight: 700;
			  color: rgba(144,147,153,1);
		  }
          & span:nth-of-type(3){
			  opacity: 1;
			  font-size: 20rpx;
			  font-family: PingFangSC;
			  font-weight: 700;
			  text-align: left;
			  color: rgba(144,147,153,1);
		  }
		  .progress{
			  position: absolute;
			  width: 144rpx;
			  height: 16rpx;
			  opacity: 1;
			  border:4rpx solid #ff8300;
			  border-radius: 16rpx;
			  bottom: -20rpx;
			  right: 0;
			  overflow: hidden;
			  i{
				  height: 200%;
				  position: absolute;
				  left:0;
				  background-color: #ff8300;
			  }
		  }
		}
		.footer{
			position: absolute;
			bottom: 32rpx;
			opacity: 1;
			font-size: 28rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			color: #000000;
			width: 100%;
			left:0;
			padding: 0 32rpx;
			box-sizing: border-box;
			button{
				width: 150rpx;
				height: 52rpx;
				opacity: 1;
				background: #cccccc;
				border-radius: 16rpx;
				box-shadow: 0rpx 4rpx 8rpx 0rpx rgba(0,0,0,0.29);
				opacity: 1;
				font-size: 24rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				color: #fff;
				line-height: 52rpx;
				position: absolute;
				right:32rpx;
				bottom: 0;
				z-index: 50;
				&::after{
					content: unset;
				}
				&.success{
					background: #ff8300;
					.iconfont{
					   font-size: 24rpx;
					}
				}
			}
		}
	}
</style>
