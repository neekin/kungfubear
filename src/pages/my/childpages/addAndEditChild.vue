<template>
	<layout>
		<whitepanel>
			<ul class="info">
				<li>
					<div>
						<span>*</span>
						孩子姓名
					</div>
					<input type="text" placeholder="请输入姓名" v-model="child.children_name" />
				</li>
				<li>
					<div>
						<span>*</span>
						出生年月日
					</div>
					<input type="date" placeholder="请选择日期" v-model="child.children_birthday" />
				</li>
				<li>
					<div>
						<span>*</span>
						性别
					</div>

					<radio-group bindchange="radioChange" class="gender" @change="changeGender" v-model="child.children_sex">
						<label class="weui-cell weui-check__label">
							<div class="weui-cell__hd"><radio value="1" checked="checked" /></div>
							<div class="weui-cell__bd">男</div>
						</label>
						<label class="weui-cell weui-check__label">
							<div class="weui-cell__hd"><radio value="2" /></div>
							<div class="weui-cell__bd">女</div>
						</label>
					</radio-group>
				</li>
			</ul>
		</whitepanel>
		<whitepanel>
			<ul class="info">
				<li>
					<div>特长</div>
					<input type="text" v-model="child.children_trait" />
				</li>
			</ul>
		</whitepanel>
		<whitepanel>
			<ul class="info">
				<li>
					<div>
						<span>*</span>
						第一紧急联系人信息(必填)
					</div>
				</li>
				<li>
					爸爸
					<input type="text" placeholder="输入姓名" v-model="child.children_contacts[0].name" />
				</li>
				<li>
					联系电话
					<input type="text" placeholder="请输入联系电话" v-model="child.children_contacts[0].phone" />
				</li>
			</ul>
		</whitepanel>
		<whitepanel>
			<ul class="info">
				<li><div>第二紧急联系人信息</div></li>
				<li>
					妈妈
					<input type="text" placeholder="输入姓名" v-model="child.children_contacts[1].name" />
				</li>
				<li>
					联系电话
					<input type="text" placeholder="请输入联系电话" v-model="child.children_contacts[1].phone" />
				</li>
			</ul>
		</whitepanel>
		<whitepanel>
			<div class="box1">
				<div class="title">疾病信息</div>
				<textarea value="" placeholder="请描述孩子身体状况" v-model="child.children_info" />
			</div>
		</whitepanel>
		<whitepanel>
			<ul class="radio-group">
				<li v-for="(item, index) in pactionlist" :class="{ checked: child.protocol_list[index] }" :key="item.uid" @click="reader(index)">
					<div class="radio "><span class="iconfont iconduigou"></span></div>
					{{ item.paction_title_cn }}
				</li>
			</ul>
		</whitepanel>

		<actionsheet title="提示" :show="acShow" @close="acShow = $event" @success="save_success">
			<div class="ac-title">您将绑定:</div>
			<p class="ac-content">{{ child.children_name }} {{ child.children_birthday }} {{ child.children_sex == 1 ? '男' : '女' }}</p>
			<p class="ac-tips">绑定后以上信息无法修改及删除，请仔细核对</p>
		</actionsheet>
		<div class="mask" v-if='proshow' @click='closePac'>
			<div class="xieyi" @click.stop="e=>{ e.stopPropagation() }">
			      <div class="content">
					  <div class="title">{{currentPac.paction_title_cn}}</div>
					  <scroll-view scroll-y="true" class='scroll'>
					     <p> 
						 {{currentPac.paction_info_cn}}
					    </p>
					  </scroll-view>
					  <div class="btn" @click='agree'>
						    <sbtn>同意</sbtn>
					  </div>
					
				  </div>
			</div>

		</div>
		<div @click="save"><sbtn>保存</sbtn></div>
	</layout>
</template>

<script>
import protocol from '../components/protocol';
export default {
	components: {
		protocol
	},
	onLoad(params) {
		if (params.type === 'add') {
			this.init();
		}
	},
	methods: {
		reader(index) {
			this.proshow = true
			this.currentPac  = this.pactionlist[index];
			this.currentIndex = index
		},
		agree(){
			this.child.protocol_list[this.currentIndex] = true
			this.closePac()
		},
		closePac(){
			this.proshow = false
			this.currentPac = null
			this.currentIndex = 0
		},
		async init() {
			const { data } = await this.$api.child.pactionlist();
			this.pactionlist = data.list;
			this.child.protocol_list = new Array(data.list.length).fill(false);
		},
		change(index, val) {
			let arr = JSON.parse(JSON.stringify(this.child.protocol_list));
			arr[index] = val;
			this.child.protocol_list = arr;
		},
		save_success() {
			console.log(this.child);
			this.$api.child.add(this.child).then(res => {
				if (res.status === 0) {
					wx.showToast({
						title: res.message,
						icon: 'none'
					});
				} else {
					wx.showToast({
						title: res.message,
						icon: 'none'
					});
					this.acShow = false;
				}
			});
		},
		save() {

			if (!this.child.children_name || !this.child.children_birthday || !this.child.children_trait || !this.child.children_sex || !this.child.children_info) {
				wx.showToast({
					title: '信息不完整',
					icon: 'none'
				});
				return;
			}
			if (!this.child.protocol_list.every(item=>item===true)) {
				wx.showToast({
					title: '请同意保险协议',
					icon: 'none'
				});
				return;
			}
			if (!this.child.children_contacts[0].name || !this.child.children_contacts[0].phone) {
				wx.showToast({
					title: '至少填写一位紧急联系人',
					icon: 'none'
				});
				return;
			}
			this.acShow = true;
		},
		changeGender(value) {
			this.child.children_sex = value.detail.value;
		}
	},
	data() {
		return {
			proshow:false,
			acShow: false,
			pactionlist: [],
			currentIndex: 0,
			currentPac:null,
			child: {
				children_name: '',
				children_birthday: '',
				children_trait: '',
				children_sex: 1,
				children_info: '',
				children_contacts: [
					{
						title: '',
						name: '',
						phone: ''
					},
					{
						title: '',
						name: '',
						phone: ''
					}
				],
				protocol_list: [false, false]
			}
		};
	}
};
</script>

<style lang="scss" scoped>
.mask {
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	background-color: rgba(151,151,151,0.2);
	z-index: 10;
	.xieyi{
		position: absolute;
		top:20%;
		left:50%;
		width: 100%;
		transform: translateX(-50%);
		display: flex;
		flex-direction: column;

		padding:  32rpx;
		box-sizing: border-box;
		.content{
			justify-content: space-between;
			box-sizing: border-box;
			padding:  32rpx;
			display: flex;
			flex-direction: column;
			background-color: #fff;
			min-height: 600rpx;
			max-height: 900rpx;
			width: 696rpx;
			border-radius: 25rpx;
			.title{
				text-align: center;
				margin-bottom: 20rpx;
			}
			::v-deep .success{
				margin-top: 20rpx;
				button{
					width: 80%;
				}
			}
			.scroll{
				flex:1;
				overflow: hidden;
				position: relative;
				z-index: 20;
				min-height: 480rpx;
				max-height: 780rpx;
			}
		}
	
	}
}
.text {
	li {
		padding: 32rpx;
		display: flex;
		flex-direction: column;
		div {
			color: #000000;
			margin-bottom: 24rpx;
		}
		font-size: 28rpx;
	}
}
.box1 {
	padding: 32rpx;
	.title {
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 600;
		text-align: justify;
		color: #000000;
		line-height: 40rpx;
		letter-spacing: -1rpx;
	}
	textarea {
		height: 134rpx;
		font-size: 28rpx;
	}
}
.info {
	padding: 0;
	.gender {
		display: flex;
		.weui-cell {
			display: flex;
			margin-left: 40rpx;
			justify-items: flex-start;
			align-items: flex-start;
			::v-deep .uni-radio-input-checked.uni-radio-input {
				border-color: rgba(255, 144, 34, 1) !important;
				background-color: unset !important;
				&::before {
					background-color: rgba(255, 144, 34, 1);
				}
			}
			::v-deep .uni-radio-input {
				width: 30rpx;
				height: 30rpx;
				position: relative;
				border-color: rgba(0, 0, 0, 0.2) !important;
				background-color: unset !important;
				&::before {
					width: 20rpx;
					height: 20rpx;
					border-radius: 50%;
					position: absolute;
					background-color: rgba(0, 0, 0, 0.2);
					content: '';
					top: 50%;
					left: 50%;
					transform: translateX(-50%) translateY(-42%);
				}
			}
			::v-deep .weui-cell__hd {
				line-height: 30rpx;
			}
		}
	}
	li {
		padding: 32rpx;
		border-bottom: 1rpx solid #f7f7f7;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		font-size: 28rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		color: #000000;
		span {
			color: rgba(224, 32, 32, 1);
		}
		.uni-input-placeholder {
			text-align: right;
			font-size: 28rpx;
		}
		/deep/.uni-input-input {
			text-align: right;
			flex: 1;
			font-size: 28rpx;
		}
	}
}

.radio-group {
	padding-left: 0;
	li {
		display: flex;
		padding: 32rpx;
		border-bottom: 1rpx solid #f7f7f7;
		font-family: PingFangSC, PingFangSC-Semibold;
		align-items: center;
	}
	.radio {
		width: 38upx;
		height: 38upx;
		border-radius: 50%;
		border: 2upx solid #d8d8d8;
		.iconfont {
			opacity: 0;
		}
		margin-right: 16rpx;
	}
	li.checked {
		.radio {
			width: 40upx;
			height: 40upx;
			background: #ff8300;
			border: unset;
			display: flex;
			justify-content: center;
			align-items: center;
			.iconfont {
				opacity: 1;
				color: #fff;
				font-size: 30upx;
			}
		}
	}
}
.ac-title {
	font-size: 32rpx;
	font-family: PingFangSC, PingFangSC-Semibold;
	font-weight: 600;
	text-align: left;
	color: #000000;
	line-height: 28rpx;
	letter-spacing: -1rpx;
}
.ac-content {
	margin: 32rpx 0;
	font-size: 32rpx;
	font-family: PingFangSC, PingFangSC-Semibold;
	font-weight: 600;
	text-align: left;
	color: #000000;
	line-height: 28rpx;
	letter-spacing: -1rpx;
}
.ac-tips {
	opacity: 0.4;
	font-size: 28rpx;
	font-family: PingFangSC, PingFangSC-Regular;
	font-weight: 400;
	text-align: left;
	color: #000000;
	line-height: 28rpx;
	letter-spacing: -1rpx;
}
</style>
