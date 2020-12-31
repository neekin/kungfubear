<template>
	<div class="panel" :class='{"selected":selected}'>
		<div class="leftbox">
			<div class="title">
				{{item.branch_title_cn}}
			</div>
			<div class="juli">
				距离您2.4KM
			</div>
			<div class="address">
				{{item.branch_address_cn}}
			</div>
		</div>
		<div class="rightbox">
			<navigator :url="url+'?uid='+item.uid" class='btn'>
					{{text}}
			</navigator>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			item:{
				type:Object,
				default:()=>({})
			},
			selected:{
				type:Boolean,
				default:false
			},
			text:{
				default:"去购课"
			},
			url:{
				default:'/pages/gouke/goukeinfo'
			}
		}
	}
</script>

<style scoped lang='scss'>
.panel.selected{
	height: 246upx;
	.leftbox{
		&::after{
			height: 0;
			height:178upx;
		}
		.address{
			height: 80upx;
		}
	}
	.rightbox{
		.btn{
			display: grid;
			 opacity: 1;
		}
	}
}
.panel{
	width: 686upx;
	height: 166upx;
	background: #ffffff;
	border-radius: 16upx;
	margin-top: 24upx;
	padding: 32upx;
	box-sizing: border-box;
	transition: all 0.5s;
	display: flex;
	.leftbox{
		width: 476upx;
		position: relative;
		&::after{
			content: '';
			position: absolute;
			width: 2px;
			height: 0;
			opacity: 0.2;
			background-color: #000;
			right:32upx;
			top:0;
			transition: all 0.5s;
		}
		.title{
			font-size: 36upx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			color: #000000;
		}
		.juli{
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #909399;
		}
		.address{
			width: 408upx;
			height: 0;
			overflow: hidden;
			opacity: 0.5;
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #000000;
			line-height: 40upx;
			transition: height 0.5s;
		}
	}
	.rightbox{
		display: grid;
		place-items: center right;
		flex:1;
		.btn{
		    width: 144upx;
			transition: opacity 0.5s;
			opacity: 0;
			overflow: hidden;
			height: 52upx;
			background: #ff8300;
			border-radius: 200upx;
			box-shadow: 0px 4upx 8upx 0upx #ff9022; 
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 500;
			text-align: left;
			color: #ffffff;
			text-decoration: none;
			display: none;
			place-items: center;
		}
	}
}
</style>