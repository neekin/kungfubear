<template>
	<box>
		<div class="menus">
			<ul class="menu">
				<li>
					<img src="/static/images/index/wuguan.svg" alt="">
					武馆
				</li>
				<li>
					<img src="/static/images/index/gonggao.svg" alt="">
					公告
				</li>
				<li>
						<img src="/static/images/index/yueke.svg" alt="">
						约课
				</li>
				<li>
					<img src="/static/images/index/gouke.svg" alt="">
					购课
				</li>
				<li>
					<img src="/static/images/index/fankui.svg" alt="">
					购课
				</li>
			</ul>
			<div class="line"></div>
			<div class="notice">
				<span class='tag'><img src="/static/images/index/hotnews.png" alt=""></span>
				<span class="lie"></span>
				<p>岁小鑫获得下沙古越武馆的50优惠这是充字数的文字券</p>
			</div>
		</div>
	</box>
</template>

<script>
</script>

<style lang='scss' scoped>
	.menus{
		width: 686upx;
		height: 312upx;
		background: #ffffff;
		border-radius: 16upx;
		box-shadow: 0px 4upx 16upx 0px #f8ecdf; 
		margin-top: 114upx;
		padding: 0 30upx;
		box-sizing: border-box;
		.menu{
			display: flex;
			list-style: none;
			padding: 40upx 0 38upx 0;
			justify-content: space-between;
			li{
				height:152upx;
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: center;
			}
			img{
				height:92upx;
				width: 92upx;
			}
		}
		.line{
			width: 622upx;
			margin-left: 4upx;
			opacity: 0.1;
			border-top: 2upx solid #000000;
		}
		.notice{
			height: 80upx;
			display: flex;
			align-items: center;
			.tag{
				width: 48upx;
				height:48upx;
				img{
					height:100%;
					width: 100%;
				}
			}
			.lie{
				height: 30upx;
				opacity: 0.46;
				border: 1px solid #ff9022;
				margin: 0 24upx 0 22upx;
			}
			p{
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #6f6f6f;
				white-space:nowrap; 
				overflow:hidden; 
				text-overflow:ellipsis;
				flex:1;
			}
		}
	}
</style>
