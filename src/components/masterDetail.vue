<template>
	<div class='master' :class='{show:isShow,hide:!isShow}'  @click.stop='close'>
		<div class="masterDetail" @click.stop='stop'>
			<div class="title">
				师父介绍
				<span class="close" @click.stop='close'><img src="/static/images/wuguan/closebtn.png" alt=""></span>
			</div>
			<div class="content">
				<div class="headimg">
					<img src="/static/images/wuguan/李小龙.jpg" alt="">
					<span class="name">李小龙</span>
				</div>
				<div class="text">
                      <p>
						  李小龙（1940年11月27日—1973年7月20日），原名李振藩，师承叶问，1940年出生于美国加州旧金山，祖籍中国广东省佛山市顺德区均安镇，世界武道变革先驱者、武术技击家、武术哲学家、MMA之父、武术宗师、功夫片的开创者和截拳道创始人、华人武打电影演员，中国功夫首位全球推广者、好莱坞首位华人主角。他在香港的四部半电影3次打破多项记录，其中《猛龙过江》打破了亚洲电影票房记录，与好莱坞合作的《龙争虎斗》全球总票房达2.3亿美元。 [1]
						  1962年李小龙开办“振藩国术馆”，1967年自创截拳道，1973年7月20日，李小龙在香港逝世，年仅33岁。1979年美国洛杉矶市政府将补拍版《死亡游戏》的开映日6月8日定为“李小龙日”（7月8日为错误翻译）。1993年美国发行李小龙逝世20周年纪念钞票，好莱坞大道铺上李小龙纪念星徽；同年，获香港电影金像奖大会颁发“终身成就奖”。1998年11月，获中国武术协会颁发“武术电影巨星奖”。
					  </p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:{
			master:{
				default:()=> null
			}
		},
		model:{
			prop:'master',
			event:'update'
		},
		methods:{
			close(){
				this.$emit('update',null)
			},
			stop(e){
					e.stopPropagation()
			}
		},
		computed:{
			isShow(){
				return this.master !== null
			}
		}
	}
</script>

<style lang="scss" scoped>
.hide.master{
	display: none;
	.masterDetail{
		width: 750upx;
		height: 854upx;
		background: #ffffff;
		border-radius: 16upx 16upx 0upx 0upx;
		position: absolute;
		transform: translateZ(0) translateY(854upx);
		bottom: 0;
	}
}
.show.master{
	height: 100vh;
	width: 100vw;
	background-color: rgba(0,0,0,0.2);
	position: fixed;
	top:0;
	left:0;
	z-index: 9999;
	.masterDetail{
		width: 750upx;
		height: 854upx;
		background: #ffffff;
		border-radius: 16upx 16upx 0upx 0upx;
		position: absolute;
		transform: translateZ(0) translateY(0);
		bottom: 0;
		transition: transform 0.5s;
		.content{
			display: flex;
			flex-direction: column;
			.headimg{
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 25upx 0 30upx 0;
				img{
					width: 116upx;
					height: 116upx;
					border-radius: 110upx;
				}
				.name{
					margin-top: 20upx;
					font-size: 28upx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					color: #000000;
				}
			}
			.text{
				padding: 10upx 32upx;
				overflow-y: auto;
				height:500upx;
				font-size: 32upx;
				font-family: PingFangSC, PingFangSC-Regular;
				text-align: justify;
			}
		}
		.title{
			height:107upx;
			line-height: 107upx;
			border-bottom: 1upx solid rgba(151,151,151,0.2);
			font-size: 32upx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			color: #000000;
			text-align: center;
			position: relative;
			.close{
				width: 34upx;
				height: 34upx;
				position: absolute;
				right:35upx;
				bottom: 30upx;
				img{
					width: 34upx;
					height: 34upx;
					position: absolute;
					left:0;
				}
			}
		}
	}
}
</style>
