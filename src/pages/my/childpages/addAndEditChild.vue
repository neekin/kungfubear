<template>
	<layout>
		<whitepanel>
			<ul class="info">
				<li>
					<div>
						<span>*</span>
						孩子姓名
					</div>
					<input type="text" placeholder="请输入姓名" />
				</li>
				<li>
					<div>
						<span>*</span>
						出生年月日
					</div>
					<input type="date" />
				</li>
				<li>
					<div>
						<span>*</span>
						性别
					</div>

					<radio-group bindchange="radioChange">
						<label class="weui-cell weui-check__label">
							<div class="weui-cell__hd"><radio value="1" checked="true" /></div>
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
					<input type="text" />
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
					<input type="text" />
				</li>
				<li>
					爸爸
					<input type="text" />
				</li>
				<li>
					联系电话
					<input type="text" />
				</li>
			</ul>
		</whitepanel>
		<whitepanel>
			<ul class="info">
				<li>
					<div>
						第二紧急联系人信息
					</div>
					<input type="text" />
				</li>
				<li>
					妈妈
					<input type="text" />
				</li>
				<li>
					联系电话
					<input type="text" />
				</li>
			</ul>
		</whitepanel>
		<whitepanel>
			<ul class="text">
				<li>
					<div>疾病信息</div>
					<textarea value="" placeholder="请描述孩子身体状况" />
				</li>
			</ul>
		</whitepanel>
		<whitepanel>
			<ul class="radio-group">
				<li class='checked'>
					<div class="radio "><span class="iconfont iconduigou"></span></div>
					签署上课协议书
				</li>
				<li>
					<div class="radio"><span class="iconfont iconduigou"></span></div>
					同意社会公众险
				</li>
			</ul>
		</whitepanel>
		<sbtn>保存</sbtn>
		<actionsheet title="提示">
			<div>您将绑定:</div>
			<p>张大宝 1999-10-18 男</p>
			<p>绑定后以上信息无法修改及删除，请仔细核对</p>
		</actionsheet>
	</layout>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="scss" scoped>
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
		textarea {
			height: 134rpx;
		}
	}
}
.info {
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
		input[type='text'] {
			text-align: right;
			flex: 1;
		}
	}
}

.radio-group {
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
	li .checked {
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
</style>
