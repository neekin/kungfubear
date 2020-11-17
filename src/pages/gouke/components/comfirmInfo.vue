<template>
	<div class="comfirmInfo" :class='{hide:!showComfiremInfo,show:showComfiremInfo}'>
			   <div class="title">
			   	确认订单
		        <backbtn @click.native='closeThis'/>
			   </div>
			   <div class="goodsname">
				   10-15岁体适一级体能训练课
			   </div>
	    <div class="goodsinfo">
				   <div class="specinfo">
				   			   <div class="specname">课时</div><div class="info">10课时</div>
				   </div>
				   <div class="specinfo">
				   			   <div class="specname">课程时间</div><div class="info">30分钟/课时</div>
				   </div>
				   <div class="specinfo">
				   			   <div class="specname">所属武馆</div><div class="info">熊少武青少年武馆</div>
				   </div>
				   <div class="specinfo" @click='showCouponsEvent'>
				   		<div class="specname">优惠券</div><div class="info">-10</div>
				   </div>
			   </div>
			   <div class="buybtns">
				   <div class="count">
					   <div class='total'>合计: <span>￥298</span></div>
					   <div class='coupon'>优惠: <span>￥10</span></div>
				   </div>
				   <div class="buybtn">
					   <img src="/static/images/wuguan/confirm.png" alt="">
					   <span>
						   确定支付
					   </span>
					</div>
			   </div>
	</div>
</template>
<script>
	import backbtn from './backbtn'
export default {
	props:['showComfiremInfo'],
	methods:{
		closeThis(){
			this.$emit('close',false)
		},
		showCouponsEvent(){
			this.$emit("showCouponsEvent",true)
		}
	},
 components:{
	 backbtn
 }
}
</script>
<style lang="scss" scoped>
.comfirmInfo{
	&.show{
		height:724upx;
		width: 100vw;
		background: #ffffff;
		border-radius: 16px 16px 0px 0px;
		position: absolute;
		bottom: 0;
		left:0;
		right:0;
		.title{
			height:100upx;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: 32upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 600;
			color: #000000;
			border-bottom: 2px solid rgba(151,151,151,0.2);
		}
		.goodsname{
			height:116upx;
			font-size: 36upx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			color: #000000;
			display: flex;
			align-items: center;
			padding:0 32upx;
			border-bottom: 20upx solid rgba(0,0,0,0.05);
		}
		.buybtns{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height:146upx;
			padding: 0 28upx 0 32upx;
			.total{
				font-size: 36upx;
				font-family: PingFangSC, PingFangSC-Semibold;
				font-weight: 600;
				span{
					color:#FF8300;
					padding-left: 20upx;
				}
			}
			.coupon{
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				color: #909399;
				span{
					padding-left: 20upx;
				}
			}
			.buybtn{
				width: 284upx;
				height:102upx;
				position: relative;
				img{
					position: absolute;
					width: 100%;
				}
				span{
					width: 100%;
		            height:90upx;
					position: absolute;
					font-size: 32upx;
					font-family: PingFangSC, PingFangSC-Semibold;
					font-weight: 600;
					color: #ffffff;
					display: flex;
					justify-content: center;
					align-items: center;
				}
			}
		}
		.specinfo{
			overflow: hidden;
			display: flex;
			padding: 0 28upx;
			justify-content: space-between;
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Regular;
			color: #000000;
			margin:32upx 0;
			.specname{
				font-weight: 600;
			}
			.info{
				opacity: 0.8;
			}
		}
		.goodsinfo{
			border-bottom: 20upx solid rgba(0,0,0,0.05);
		}
	}
	&.hide{
		display: none;
	}
	}
</style>