<template>
	<layout>
		<div class="bg"></div>
		<banner />
		<box>
			<div class="info">
				<div class="title">熊小武青少年武馆</div>
				<div class="address">
					<span class="iconfont iconlocation"></span>
					<p>
						上海市浦东新区杨浦镇康桥路175号-康桥商务酒店大厦
						<span class="dis">43KM</span>
					</p>
				</div>
				<div class="phone">
					<span class="iconfont iconPhone"></span>
					<p>020-123456789</p>
				</div>
				<div class="time">
					<span class="iconfont iconshop"></span>
					<p>11:00-24:00</p>
				</div>
				<div class="btns">
					<div class="btn" @click="goPage('/pages/gouke/gouke')">
						<span class="iconfont iconclock"></span>
						约课
					</div>
					<div class="btn">
						<span class="iconfont icongouwuche" @click="goPage('/pages/yueke/yueke')"></span>
						购课
					</div>
				</div>
			</div>
		</box>
		<info-tab
			v-model="actIndex"
			:value="actIndex"
			@input="
				value => {
					actIndex = value;
				}
			"
		/>
		<box class="box1">
			<content>
				<section class="text" v-if="actIndex === 0">
					<div class="title">武馆介绍</div>
					<div class="context">
						文本，是指书面语言的表现形式，从文学角度说，通常是具有完整、系统含义（Message）的一个句子或多个句子的组合。一个文本可以是一个句子（Sentence）一个段落（Paragraph）或者一个篇章（Discourse）。广义“文本”：任何由书写所固定下来的任何话语。（利科尔）
						狭义“文本”：由语言文字组成的文学实体，代指“作品”，相对于作者、世界构成一个独立、自足的系统。
					</div>
				</section>
				<section class="list" v-if="actIndex === 1">
					<div class="item" @click="setShifu">
						<img src="/static/images/wuguan/李小龙.jpg" alt="" />
						<div class="name">李小龙</div>
					</div>
					<div class="item" @click="setShifu">
						<img src="/static/images/wuguan/李小龙.jpg" alt="" />
						<div class="name">李小龙</div>
					</div>
					<div class="item" @click="setShifu">
						<img src="/static/images/wuguan/李小龙.jpg" alt="" />
						<div class="name">李小龙</div>
					</div>
					<div class="item" @click="setShifu">
						<img src="/static/images/wuguan/李小龙.jpg" alt="" />
						<div class="name">李小龙</div>
					</div>
					<div class="item" @click="setShifu">
						<img src="/static/images/wuguan/李小龙.jpg" alt="" />
						<div class="name">李小龙</div>
					</div>
				</section>
				<section class="kefu" v-if="actIndex === 2">
					<div class="qrcode">
						<img src="/static/images/wuguan/qrcode.png" alt="" />
						<p>客服微信号:123456789</p>
					</div>
				</section>
			</content>
		</box>
		<master-detail v-model="shifu" :master='shifu' @update="(value)=>shifu=value" />
	</layout>
</template>

<script>
import banner from './components/banner.vue';
import infoTab from './components/infoTab.vue';

export default {
	components: {
		banner,
		infoTab
	},
	data() {
		return {
			actIndex: 1,
			shifu: null
		};
	},
	methods: {
		setShifu() {
			this.shifu = {};
		},
		goPage(url) {
			uni.switchTab({
				url: url
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.bg {
	background-color: #ff8300;
	height: 214upx;
	width: 100%;
	position: absolute;
	top: 0;
}
.info {
	width: 686upx;
	height: 252upx;
	.title {
		width: 288upx;
		height: 50upx;
		font-size: 36upx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		color: #000000;
		line-height: 50upx;
	}
	.address {
		display: flex;
		height: 34upx;
		opacity: 0.8;
		font-size: 24upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 34upx;
		margin-top: 16upx;
		p {
			margin-left: 14upx;
			position: relative;
		}
		.dis {
			position: absolute;
			bottom: -34upx;
			left: 0;
			font-size: 24upx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #909399;
			line-height: 34upx;
		}
	}
	.phone {
		display: flex;
		opacity: 0.8;
		font-size: 24upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		margin-top: 56upx;
		p {
			margin-left: 14upx;
		}
	}
	.time {
		margin-top: 20upx;
		opacity: 0.8;
		font-size: 24upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 34upx;
		display: flex;
		p {
			margin-left: 14upx;
		}
	}
	position: relative;
	.btns {
		position: absolute;
		display: flex;
		bottom: 0;
		right: 0;
		.btn {
			width: 136upx;
			height: 52upx;
			display: flex;
			align-items: center;
			background: #ffffff;
			border-radius: 8upx;
			box-shadow: 0upx 6upx 26upx 0upx rgba(150, 87, 73, 0.09);
			font-size: 28upx;
			font-family: PingFangSC, PingFangSC-Medium;
			font-weight: 500;
			text-align: left;
			color: #ff8300;
			line-height: 40upx;
			margin-left: 12upx;
			padding: 0 17upx;
			box-sizing: border-box;
			.iconfont {
				margin-right: 13upx;
			}
		}
	}
}
.box1 {
	padding-top: 10upx;
	content {
		.text {
			.title {
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Medium;
				font-weight: 500;
				text-align: left;
				color: #000000;
			}
			.context {
				font-size: 28upx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: #000000;
				line-height: 52upx;
				letter-spacing: -1upx;
			}
		}
		.list {
			display: grid;
			grid-gap: 13upx;
			grid-template-columns: repeat(auto-fit, minmax(220upx, 1fr));
			.item {
				width: 220upx;
				height: 326upx;
				background: #fff;
				border-radius: 16upx;
				box-shadow: 0upx 3upx 13upx 0upx rgba(150, 87, 73, 0.09);
				display: flex;
				flex-direction: column;
				img {
					width: 220upx;
					height: 238upx;
					border-radius: 8upx 8upx 0px 0px;
					background-color: #000;
				}
				.name {
					flex: 1;
					display: grid;
					place-items: center;
					font-size: 28upx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: left;
					color: #000000;
				}
			}
		}
		.kefu {
			height: 200upx;
			width: 100%;
			display: grid;
			place-items: center;
			.qrcode {
				display: grid;
				place-items: center;
				img {
					width: 200upx;
					height: 200upx;
				}
				p {
					font-size: 28upx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: justify;
					color: #000000;
				}
			}
		}
	}
}
</style>
