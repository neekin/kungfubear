<template>
	<box>
		<div class="group">
			<img src="/static/images/index/group.png" alt="" class='bg'>
			<img src="/static/images/index/go.png" alt="" class='btn'>
			<p class="text">定金参团 立即加入</p>
		</div>
	</box>
</template>

<script>
</script>

<style lang='scss' scoped>
	.group{
		width: 686upx;
		height: 136upx;
		position: relative;
	     .bg{
			  width: 100%;
			  height:100%;
		  }	
		  .btn{
			  position: absolute;
			  height: 100upx;
			  width: 100upx;
			  right:0;
			  top:50%;
			  transform: translateY(-50%);
		  }
		  .text{
			  width: 356upx;
			  height: 40upx;
			  font-size: 42upx;
			  font-family: STYuanti, STYuanti-SC;
			  font-weight: SC;
			  text-align: right;
			  color: #ffffff;
			  line-height: 40upx;
			  letter-spacing: -1px;
			  position: absolute;
			  top:50%;
			  transform: translateY(-50%);
			  left:190upx;
		  }
	}
</style>
