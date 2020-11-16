<template>
	<div class="changeLanguage">
		<span :class="lang=='en'?'active':''">EN</span>
		/
		<span :class="lang=='zh'?'active':''">中</span>
	</div>
</template>
<script>
export default{
   props:{
	   lang:{
		   type:String,
		   default:'zh'
	   }
   },
   mounted(){
	   console.log(this.lang)
   }
}
</script>

<style lang='scss' scoped>
	.changeLanguage{
		width: 88upx;
		height: 46upx;
		background: #fff;
		border-radius: 24upx;
		box-shadow: 0upx 2upx 10upx 0upx rgba(181,181,181,0.18); 
		position: fixed;
		bottom: 150upx;
		right:32upx;
		font-size: 20upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: center;
		color: #000000;
		letter-spacing: 0px;
		display: flex;
		justify-content: center;
		align-items: center;
		.active{
			color: #FF9022
		}
	}
</style>
