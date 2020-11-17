<template>
	<div class="coupons" :class='{show:showCoupons,hide:!showCoupons}'>
		<div class="title">
			优惠券选择
			<backbtn  @click.native='$emit("back",false)' />
		</div>
		<coupon checked='checked' :counponInfo='counponInfo'></coupon>
		<coupon :counponInfo='counponInfo'></coupon>
		<coupon :counponInfo='counponInfo'></coupon>
	     <coupon :counponInfo='{text:"不使用优惠券"}'></coupon>		
		<div class="btn">
			<div class='button'>确定</div>
		</div>
	</div>
</template>

<script>
import backbtn from './backbtn'
import coupon from './coupon'
export default {
	data(){
		return{
			counponInfo:{
				text:'满158减10'
			}
		}
	},
	methods:{
	},
	props:{
		showCoupons:{
			default:false,
			type:Boolean
		}
	},
 components:{
	 backbtn,
	 coupon
 }
}
</script>

<style lang="scss" scoped>
.coupons{
	&.show{
		width: 100vw;
		background: #ffffff;
		border-radius: 16px 16px 0px 0px;
		position: absolute;
		bottom: 0;
		.title{
			display: flex;
			justify-content: center;
			align-items: center;
			padding: 30upx;
		}
		.btn{
			height:144upx;
			border-top: 2px solid #f4f4f4;
			display: flex;
			justify-content: center;
			align-items: center;
			margin-top: 20upx;
			div.button{
				width: 686upx;
				height: 90upx;
				background: #ff8300;
				border-radius: 44upx;
				box-shadow: 0upx 4upx 8upx 0upx #ff9022;
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
	&.hide{
		display: none;
	}
	
	}
</style>
