<template>
	<div class='radio' @click='clickHandler' :class={checked:checked}>
		<span class='iconfont' :class='{iconduigou:checked}'></span>
		<slot>
			{{value}}
		</slot>
	</div>
</template>

<script>
	export default{
		props:{
			value:{
				default:""
			},
			checked:{
				default:false
			}
		},
		model:{
			 prop: 'checked',
			 event: 'change'
		},
		methods:{
			clickHandler(){
				this.$emit('change',this.value)
			}
		}
		
	}
</script>

<style lang='scss' scoped>
	.radio{
		position: relative;
		height: 72rpx;
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 72rpx;
		padding-left: 56rpx;
		&>span{
			content: '';
			width: 40rpx;
			height: 40rpx;
			border: 2rpx solid #d8d8d8;
			border-radius: 50%;
			position: absolute;
			transform:  translateY(-50%);
			top:50%;
			left:0;
			color:#fff;
			display: flex;
			justify-content: center;
			align-items: center;
		}
		&.checked>span{
			width: 40rpx;
			height: 40rpx;
			background: #ff8300;
		}
		
	}
</style>
