<template>
	<div class='tab'>
		<div class='btn' :class='{active:list}' @click='goPage("/pages/wuguan/wuguan")'>
			<span>列表模式</span>
		</div>
		<navigator url="/pages/wuguan/map" class='btn' :class='{active:map}'>
				<span>
					地图模式
				</span>
		</navigator>
	</div>
</template>

<script>
	export default {
		props:{
			mode:{
				defalut:()=>'list'
			}
		},
		methods:{
			goPage(url){
				uni.switchTab({
					url:url
				})
			}
		},
		computed:{
			list(){
				return this.mode === 'list'
			},
			map(){
				return this.mode ==='map'
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
	.btn{
		display: flex;
		justify-items: center;
		align-items: center;
		width: 325upx;
		height: 96upx;
		box-sizing: border-box;
		padding-left: 194upx;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 400;
		color: #000000;
	}
	navigator.btn{
		padding-left: 74upx;
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
