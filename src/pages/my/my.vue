<template>
	<layout>
		<div class="mypages">
			<div class="header">
				<box class="userbox">
					<div class="usersection" v-if="getUserInfo">
						<div class="headerimg"><img :src="getUserInfo.avatarUrl" alt="" /></div>
						<div class="userinfo">
							<div class="nickname">{{ getUserInfo.nickName }}</div>
							<div class="usernum">会员号:0</div>
						</div>
						<div class="setting"><img src="/static/images/my/setting.svg" alt="" /></div>
					</div>
					<div class="usersection" v-else>
						<div class="headerimg"></div>
						<div class="userinfo">
							<div class="nickname">未登录</div>
							<div class="usernum">会员号:0</div>
						</div>
						<div class="setting"><img src="/static/images/my/setting.svg" alt="" /></div>
					</div>
				</box>
				<box class="menubox">
					<div class="menus">
						<div class="list">
							<navigator url="/pages/my/subpages/myorder" class="item">
								<img src="/static/images/my/dingdan.svg" alt="" />
								我的订单
							</navigator>
							<navigator url="/pages/my/subpages/jilu" class="item">
								<img src="/static/images/my/keshi.svg" alt="" />
								课时情况
							</navigator>
							<navigator url="/pages/my/subpages/yueke" class="item">
								<img src="/static/images/my/yueke.svg" alt="" />
								约课记录
							</navigator>
							<navigator class="item" @click="noOpen">
								<!-- url="/pages/my/subpages/fankui" -->
								<img src="/static/images/my/fankui.svg" alt="" />
								课后反馈
							</navigator>
						</div>
					</div>
				</box>
			</div>
			<div class="qiandao">上课签到</div>
			<scroll-view class="my-content" scroll-y="true">
				<box class="mychild">
					<div class="title">
						我的孩子
						<navigator class="addchild" url="childpages/addAndEditChild?type=add">
							<img src="/static/images/my/addchild.svg" alt="" />
							添加孩子
						</navigator>
					</div>
					<ul class="children">
						<li v-for="child in children" :key="child.children_id">
							<panel>
								<div class="childsection">
									<img src="/static/images/my/girl.svg" alt="" class="gender" />
									<div class="childinfo">
										{{ child.children_name }}
										<div class="info">
											<span>10岁</span>
											<span>30kg</span>
											<span>142cm</span>
										</div>
									</div>
									<div class="bianji"><img src="/static/images/my/bianji.svg" alt="" /></div>
								</div>
							</panel>
						</li>
					</ul>
				</box>
				<box>
					<div class="mainmemus">
						<panel>
							<div class="item" @click="noOpen">
								<img src="/static/images/my/tuiguang.svg" alt="" />
								推广
							</div>
							<div class="item" @click="noOpen">
								<img src="/static/images/my/youhuiquan.svg" alt="" />
								优惠券
							</div>
							<div class="item">
								<navigator url="/pages/my/submainpages/jiatingzu">
									<img src="/static/images/my/jiatingzu.svg" alt="" />
									家庭组
								</navigator>
							</div>
							<div class="item" @click="noOpen">
								<img src="/static/images/my/kefu.svg" alt="" />
								联系我们
							</div>
							<div class="item" @click="noOpen">
								<img src="/static/images/my/guanyu.svg" alt="" />
								关于我们
							</div>
							<div class="item" @click="noOpen">
								<img src="/static/images/my/tousu.svg" alt="" />
								投诉建议
							</div>
							<div class="item" @click="noOpen">
								<img src="/static/images/my/kaoji.svg" alt="" />
								考级记录
							</div>
							<div class="item" @click="noOpen">
								<img src="/static/images/my/jingcai.svg" alt="" />
								精彩瞬间
							</div>
							<!-- 			<div class="item" @click="noOpen">
								<img src="/static/images/my/yuangong.svg" alt="" />
								我是员工
							</div> -->
						</panel>
					</div>
				</box>
			</scroll-view>
			<phoney-tab />
		</div>
	</layout>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	computed: {
		...mapGetters('Login', ['getUserInfo'])
	},
	data() {
		return {
			children: []
		};
	},
	methods: {
		...mapActions('layout', ['setScrollY']),
		noOpen(e) {
			e.preventDefault();
			uni.showToast({
				title: '暂未开放',
				icon: 'none'
			});
		},
		init() {
			this.getChildren();
			this.setScrollY(false);
		},
		getChildren() {
			console.log('12213');
			this.$api.my.childrenList().then(res => {
				console.log('返回数据', res);
				this.children = res.data;
				console.log(res.data);
			});
		}
	},
	onShow() {
		const page = this.$mp.page;
		if (typeof page.getTabBar === 'function' && page.getTabBar()) {
			page.getTabBar().setData({
				selected: 4 //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
			});
		}
		this.init();
	},
	onHide() {
		this.setScrollY(true);
	}
};
</script>

<style lang="scss" scoped>
.mypages {
	display: flex;
	flex-direction: column;
	.my-content {
		overflow: hidden;
		flex: 1;
		height: 760rpx;
		margin-top: 154rpx;
		// background-color: #000;
	}
	.mainmemus {
		width: 686rpx;
		height: 540rpx;
		/deep/.panel {
			padding: 0;
			display: flex;
			flex-wrap: wrap;
		}
		.item {
			width: 228rpx;
			height: 180rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.7);
			position: relative;
			navigator {
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
			img {
				width: 40rpx;
				height: 40rpx;
				margin-bottom: 12rpx;
			}
			&::after,
			&::before {
				position: absolute;
				content: '';
				background-color: rgba(151, 151, 151, 0.2);
			}
			&:nth-of-type(1) {
				&::before {
					width: 174rpx;
					height: 2rpx;
					right: 0;
					bottom: 0;
				}
				&::after {
					width: 2rpx;
					height: 140rpx;
					right: 0;
					bottom: 0;
				}
			}
			&:nth-of-type(2) {
				&::before {
					width: 226rpx;
					height: 2rpx;
					right: 0;
					bottom: 0;
				}
			}
			&:nth-of-type(3) {
				&::before {
					width: 176rpx;
					height: 2rpx;
					left: 0;
					bottom: 0;
				}
				&::after {
					width: 2rpx;
					height: 140rpx;
					left: 0;
					bottom: 0;
				}
			}
			&:nth-of-type(4) {
				&::before {
					width: 176rpx;
					height: 2rpx;
					right: 0;
					bottom: 0;
				}
				&::after {
					width: 2rpx;
					height: 180rpx;
					right: 0;
					bottom: 0;
				}
			}
			&:nth-of-type(5) {
				&::before {
					width: 226rpx;
					height: 2rpx;
					right: 0;
					bottom: 0;
				}
			}
			&:nth-of-type(6) {
				&::after {
					width: 2rpx;
					height: 180rpx;
					left: 0;
					bottom: 0;
				}
				&::before {
					width: 176rpx;
					height: 2rpx;
					left: 0;
					bottom: 0;
				}
			}
			&:nth-of-type(7) {
				&::after {
					width: 2rpx;
					height: 140rpx;
					right: 0;
					top: 0;
				}
			}
			&:nth-of-type(8) {
				&::before {
					width: 2rpx;
					height: 140rpx;
					right: -2rpx;
					top: 0;
				}
			}
		}
	}
	.header {
		background-image: url(../../static/images/header/header.png);
		height: 230rpx;
	}
	.mychild {
		.children {
			list-style: none;
			padding: 0;
			margin: 24rpx 0 0 0;
			display: grid;
			grid-gap: 22rpx;
			grid-template-columns: repeat(auto-fill, minmax(332rpx, 1fr));
			li {
				height: 154rpx;
				width: 100%;
				/deep/.panel {
					padding: 28rpx 0 0 30rpx;
				}
				.childsection {
					display: flex;
					position: relative;
					align-items: flex-start;
					img {
						width: 46rpx;
						height: 52rpx;
					}
					.childinfo {
						margin-left: 16rpx;
						font-size: 28rpx;
						font-family: PingFangSC, PingFangSC-Semibold;
						font-weight: 600;
						text-align: left;
						color: rgba(0, 0, 0, 0.7);
						padding-top: 10rpx;
						display: flex;
						flex-direction: column;
						.info {
							margin-top: 16rpx;
							span {
								margin-right: 16rpx;
								font-size: 24rpx;
								font-family: PingFangSC, PingFangSC-Regular;
								font-weight: 400;
								text-align: left;
								color: rgba(0, 0, 0, 0.4);
							}
						}
					}
					.bianji {
						width: 54rpx;
						height: 54rpx;
						position: absolute;
						right: 0;
						top: 0;
						img {
							width: 24rpx;
							height: 24rpx;
						}
					}
				}
				&:nth-child(2n + 1):nth-last-child(-n + 1) {
					grid-column-end: span 2;
				}
			}
		}
		.title {
			// margin-top: 154rpx;
			font-size: 36rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			color: #000000;
			display: flex;
			align-items: center;
			position: relative;
			.addchild {
				font-size: 28rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				text-align: left;
				color: rgba(0, 0, 0, 0.5);
				display: flex;
				align-items: center;
				img {
					margin-left: 26rpx;
					height: 28rpx;
					width: 34rpx;
				}
			}
		}
	}
	.userbox {
		padding-bottom: 0;
	}
	.menubox {
		padding-top: 28rpx;
		.menus {
			background-color: #fff;
			border-radius: 16rpx;
			box-shadow: 0rpx 4rpx 16rpx 0rpx #f8ecdf;
			height: 178rpx;
			padding: 0 32rpx;
			box-sizing: border-box;
			.list {
				display: flex;
				margin: 0;
				padding: 0;
				justify-content: space-between;
				align-items: center;
				.item {
					img {
						height: 48rpx;
						width: 100%;
					}
					padding: 38rpx 0 42rpx 0;
					height: 98rpx;
					width: 104rpx;
					font-size: 24rpx;
					font-family: PingFangSC, PingFangSC-Regular;
					font-weight: 400;
					text-align: left;
					color: #000000;
					letter-spacing: 2rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
				}
			}
		}
	}

	.usersection {
		display: flex;
		.headerimg {
			width: 98rpx;
			height: 98rpx;
			background-color: #000;
			border-radius: 50%;
			overflow: hidden;
			img {
				height: 100%;
				width: 100%;
			}
		}
		.setting {
			width: 46rpx;
			height: 40rpx;
			margin-top: 6rpx;
		}
		.userinfo {
			margin-left: 24rpx;
			flex: 1;
			.nickname {
				font-size: 36rpx;
				font-family: PingFangSC, PingFangSC-Semibold;
				font-weight: 600;
				text-align: left;
				color: #ffffff;
			}

			.usernum {
				margin-top: 8rpx;
				height: 48rpx;
				line-height: 48rpx;
				background-color: rgba(116, 80, 80, 0.37);
				border-radius: 24rpx;
				font-size: 24rpx;
				font-family: PingFangSC, PingFangSC-Regular;
				font-weight: 400;
				color: rgba(255, 255, 255, 0.8);
				padding: 0 16rpx 8rpx 14rpx;
				display: inline-block;
				box-sizing: border-box;
			}
		}
	}
}

.qiandao {
	width: 180rpx;
	height: 64rpx;
	background: #ff8300;
	border-radius: 104rpx 0rpx 0rpx 104rpx;
	box-shadow: 0rpx 4rpx 14rpx 0rpx #ff5a07;
	position: fixed;
	right: 0;
	top: 520rpx;
	font-size: 32rpx;
	font-family: PingFangSC, PingFangSC-Semibold;
	font-weight: 600;
	text-align: left;
	color: #ffffff;
	line-height: 64rpx;
	text-indent: 26rpx;
	z-index: 3;
}
</style>
