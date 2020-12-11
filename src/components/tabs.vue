<template>
	<div class='tab'>
		<div v-for='(item,index) in list' :key='index' class='btn' :class='{active:value === item}' @click='selectThis(item)'>
			<span>{{item}}</span>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		list:{
			default:()=>[]
		},
		value:{
			default:''
		}
	},
	methods:{
		selectThis(val){
			this.$emit('input',val)
		}
	}
}
</script>

<style lang="scss">
.tab{
	width: 750upx;
	height: 96upx;
	background: #ffffff;
	display: flex;
	justify-content: center;
	padding: 0 32rpx;
	box-sizing: border-box;
	.btn{
		display: grid;
		justify-items: center;
		align-items: center;
		height: 100%;
		// width: 100%;
		// padding: 0 73rpx;
		// box-sizing: border-box;
		flex:1;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 400;
		color: #000000;
		// padding: 0 30rpx;
		max-width: 50%;
	}
	.btn.active{
		font-weight: 500;
		color: #ff9022;
		span{
			position: relative;
		}
		span:after{
			content: '';
			position: absolute;
			width: 40upx;
			height: 6upx;
			background: #ff9022;
			border-radius: 6upx;
			bottom: -6upx;
			left:50%;
			transform: translateX(-50%);
		}
	}
}
</style>
