<template>
	<layout class='lay'>
        <div class="header">
			<div class="img"></div>
			<div class="info">
			   <div class="row">
				   <div class="title">熊小武青少年武馆</div>
				   <div class="switchBtn">切换武馆</div>
			   </div>
			   <div class="row">
				   <div class="subtitle">
					     更多武馆信息
				   </div>
				   <div class="juli">
					   距离您200米
				   </div>
			   </div>
			</div>
		</div>
	  <info-tab v-model="actIndex" class='v-info-tab'/>
	  <box>
		  <div class="course">
               <div class="row">
				   <div class="left">
				   				 <div class="title">体适一级体能训练课</div>
				   				 <div class="info">课时:10 课程时间:30分钟/课时</div>
				   </div>
				   <div class="right">
				   				 <div class="price"><span>￥</span> 29.00</div>
				   				 <div class="buybtn">购买</div>
				   </div>
			   </div>
			 <div class="hr"></div>
			 <div class="expire">有效期：2019-10-15至2019-12-30</div>
		  </div>
		  <div class="course">
		       <div class="row">
		  				   <div class="left">
		  				   				 <div class="title">体适一级体能训练课</div>
		  				   				 <div class="info">课时:10 课程时间:30分钟/课时</div>
		  				   </div>
		  				   <div class="right">
		  				   				 <div class="price"><span>￥</span> 29.00</div>
		  				   				 <div class="buybtn">购买</div>
		  				   </div>
		  			   </div>
		  			 <div class="hr"></div>
		  			 <div class="expire">有效期：2019-10-15至2019-12-30</div>
		  </div>
		  <div class="course">
		       <div class="row">
		  				   <div class="left">
		  				   				 <div class="title">体适一级体能训练课</div>
		  				   				 <div class="info">课时:10 课程时间:30分钟/课时</div>
		  				   </div>
		  				   <div class="right">
		  				   				 <div class="price"><span>￥</span> 29.00</div>
		  				   				 <div class="buybtn">购买</div>
		  				   </div>
		  			   </div>
		  			 <div class="hr"></div>
		  			 <div class="expire">有效期：2019-10-15至2019-12-30</div>
		  </div>
		  <div class="course">
		       <div class="row">
		  				   <div class="left">
		  				   				 <div class="title">体适一级体能训练课</div>
		  				   				 <div class="info">课时:10 课程时间:30分钟/课时</div>
		  				   </div>
		  				   <div class="right">
		  				   				 <div class="price"><span>￥</span> 29.00</div>
		  				   				 <div class="buybtn">购买</div>
		  				   </div>
		  			   </div>
		  			 <div class="hr"></div>
		  			 <div class="expire">有效期：2019-10-15至2019-12-30</div>
		  </div>
	  </box>
	</layout>
</template>

<script>
	import infoTab from './components/infoTab'
	export default {
		data(){
			return {
				actIndex:0
			}
		},
        components:{
			infoTab
		}
	}
</script>

<style lang="scss" scoped>
.lay{
	background-color: #f7f7f7;
}
.v-info-tab{
	margin-top: -80upx;
}
.header{
	height:254upx;
	background-color: #fff;
	padding: 46upx 26upx;
	box-sizing: border-box;
	display: flex;
	.img{
		width: 100upx;
		height: 100upx;
		border-radius: 50%;
		background-color: #f00;
	}
	.info{
		flex: 1;
		padding-left: 28upx;
		display: flex;
		flex-direction: column;
		.row{
			display: flex;
			justify-content: space-between;
			.title{
				font-size: 36upx;
				font-family: PingFangSC, PingFangSC-Semibold;
				font-weight: 600;
				text-align: left;
				color: #000000;
			}
			.switchBtn{
				width: 144upx;
				height: 52upx;
				border: 2upx solid #ff9022;
				border-radius: 32upx;
				font-size: 24upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #ff8300;
				display: flex;
				justify-content: center;
				align-items: center;
			}
			.subtitle{
				opacity: 0.5;
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;
				margin-top: 10upx;
			}
			.juli{
				opacity: 0.5;
				font-size: 20upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;
				line-height: 28upx;
				margin-top: 10upx;
			}
		}
	}
}
.course{
	width: 686upx;
	height: 274upx;
	background: #ffffff;
	border-radius: 16upx;
	padding: 32upx 32upx 24upx 32upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 24upx;
	.row{
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		height:191upx;
	}
	.title{
		
		font-size: 36upx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		color: #000000;
	}
	.info{
		opacity: 0.7;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		margin-top: 20upx;
	}
	.hr{
		width: 622upx;
		height:2upx;
		background-color: rgba(0,0,0,0.1);
	}
	.expire{
		opacity: 0.6;
		font-size: 24upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		color: #000000;
		height: 80upx;
		width: 100%;
		padding-top: 30upx;
		box-sizing: border-box;
	}
	.price{
		font-size: 46upx;
		font-family: DINAlternate, DINAlternate-Bold;
		font-weight: 700;
		color: #ff8300;
		span{
			font-size: 26upx;
			font-weight: 700;
		}
	}
	.buybtn{
		width: 144upx;
		height: 52upx;
		background: #ff8300;
		border-radius: 32upx;
		box-shadow: 0upx 4upx 8upx 0upx #ff9022; 
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		color: #fefffe;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
