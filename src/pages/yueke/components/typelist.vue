<template>
	<div class="typelist">
	  <box>
		  <ul class='menu'>
		  	<li :class='{active:plan_type===1}' @click.native='activeThis(1)'>大课</li>
		  	<li :class='{active:plan_type===2}' @click.native='activeThis(2)'>私教课</li>
		  	<li :class='{active:plan_type===3}' @click.native='activeThis(3)'>体验课</li>
		  </ul>
	  </box>
	</div>
</template>

<script>
	export default{
		props:{
			plan_type:{
				default:1
			}
		},
		model:{
			prop:"plan_type",
			event:"update"
		},
		methods:{
			activeThis(val){
				this.$emit('update',val)
			}
		}
	}
</script>

<style scoped lang="scss">
	.typelist{
		margin-top: 150rpx;
		.menu{
			display: flex;
			align-items: center;
			li{
				margin-right: 60rpx;
				opacity: 1;
				font-size: 28rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				color: #000000;
				letter-spacing: -1rpx;
			}
			.active{
				opacity: 1;
				font-size: 36rpx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				color: #ff8300;
				letter-spacing: -1rpx;
				position: relative;
				&::after{
					content: '';
					position: absolute;
					width: 60%;
					height: 6rpx;
					opacity: 1;
					background: #ff9022;
					border-radius: 12rpx;
					bottom: -8rpx;
					left:50%;
					transform: translateX(-50%);
				}
			}
		}
	}
</style>
