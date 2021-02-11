<template>
	<layout>
		<box>
			<panel class="box1">
				<div class="title">
					<div class="content">
						{{ family.family_name }}
						<div class="edit">编辑</div>
					</div>
				</div>
				<box><div class="subtitle">家庭组员:</div></box>
				<ul class="memberlist">
					<li v-for='item in family.family_user_list'>
						<div class="headimg lietu">
							<img :src="item.wx_headimgurl" alt="">
							<div v-if='!item.is_admin===1' @click='openRemoveFamily(item.user_id)' class='remove'><img src="/static/images/my/remove.svg" alt=""></div>
						</div>
						<div class="name">{{item.wx_nickname}}</div>
						<p class="tag" @click='openTag(item.user_id)'>{{item.user_tag || "设置"}}</p>
					</li>
					<li  v-if='isAdmin' @click='openAddFamily'>
						<div class="headimg"><span class="iconfont iconplus"></span></div>
						<div class="name">添加成员</div>
					</li>
				</ul>
				<button v-if='!isAdmin'>退出家庭组</button>
				<sbtn class="vbtn">分享家庭组</sbtn>
			</panel>
			<div class="desc">
				<div class="stitle">家庭组介绍:</div>
				<p class='info'>
					{{family.family_desc}}
				</p>
			</div>
		</box>
		<actionsheet :show='showTag' @close='closeTag' :hideButtons='showTag' :hideTitle='showTag'>
	      <box>
			  <ul class='tags'>
			  	<li @click='setTag("爸爸")'>爸爸</li>
			  	<li @click='setTag("妈妈")'>妈妈</li>
			  	<li @click='setTag("爷爷")'>爷爷</li>
			  	<li @click='setTag("奶奶")'>奶奶</li>
			  	<li @click='setTag("其他")'>其他</li>
			  </ul>
		  </box>
		</actionsheet>
		
		<actionsheet :show='showAddFamily' 
		@close='closeAddFamily' 
		:hideCancelButton='showAddFamily' 
		title='添加家庭组员' 
		comfirmButtonText='确定添加'
		@success='addFamily'
		>
		<box>
			<input type="phone" placeholder="输入成员手机号" v-model='phone'>
		</box>
		</actionsheet>
		
		<actionsheet title='提示' @success='removeFamily' :show='showRemoveFamily' @close='closeRemoveFamily'>
			<box>
					您确定要删除成员吗？
			</box>
		</actionsheet>

	</layout>
</template>

<script>
export default {
	data() {
		return {
			family: {},
			isAdmin:false,
			showTag:false,
			currentUserID:'',
			showAddFamily:false,
			showRemoveFamily:false,
			phone:''
		};
	},
	onShow() {
		this.init();
	},
	methods: {
		init() {
			this.getFamily();
		},
		async getFamily() {
			const { data } = await this.$api.family.show();
			this.family = data;
			this.isAdmin = this.family.family_user_list.some((item)=>item.user_id===this.family.user_id && item.is_admin===1)
		},
		openRemoveFamily(uid){
			this.currentUserID = uid;
			this.showRemoveFamily = true
		},
		closeRemoveFamily(){
			this.currentUserID = '';
			this.showRemoveFamily = false
		},
		async removeFamily(){
		   const res = await this.$api.family.removemember(this.currentUserID)
		   if(res.data){
			   wx.showToast({
			   	title:'删除成功'
			   })
			   this.closeRemoveFamily()
			   this.init()
		   }
		},
		addFamily(){
			// wx.showToast({
			// 	title:this.phone
			// })
			this.closeAddFamily()
		},
		openAddFamily(){
			this.showAddFamily = true
		},
		closeAddFamily(){
			this.showAddFamily = false
		},
		openTag(uid){
			this.showTag = true
			this.currentUserID = uid
		},
		closeTag(){
			this.showTag = false
			this.currentUserID = ''
		},
		async setTag(tag){
			const res = await this.$api.family.setTag(this.currentUserID,tag)
			if(res.data){
				wx.showToast({
					title:'设置成功'
				})
				this.family.family_user_list.forEach(e=> e.user_id===this.currentUserID?e.user_tag=tag:()=>{} )
				this.closeTag()
			}
		}
	}
};
</script>

<style lang="scss" scoped>
	.tags{
		li{
			height:108rpx;
			line-height: 108rpx;
			border-bottom: 2rpx solid rgba(151,151,151,0.2);
			text-align: center;
			font-size: 32rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			color: #000000;
		}
		li:nth-last-of-type(1){
			border:unset;
		}
	}
	.desc{
		margin-top: 32rpx;
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		line-height: 40rpx;
		.info{
			margin-top: 16rpx;
			font-size: 24rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: rgba(0,0,0,0.4);
			line-height: 34rpx;
		}
	}
.vbtn {
	::v-deep .success  {
	    button{
				width: 100%;
		}
		margin-bottom: 40rpx;
	}
}
.title {
	font-size: 32rpx;
	font-family: PingFangSC, PingFangSC-Semibold;
	font-weight: 600;
	color: #000000;
	line-height: 44rpx;
	text-align: center;
	padding: 48rpx 0;
	.content {
		position: relative;
		display: inline;
		.edit {
			font-size: 28rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: justify;
			color: rgba(0, 0, 0, 0.6);
			line-height: 40rpx;
			letter-spacing: -1rpx;
			position: absolute;
			right: -100rpx;
			top: 4rpx;
		}
	}
}
.subtitle {
	font-size: 32rpx;
	font-family: PingFangSC, PingFangSC-Semibold;
	font-weight: 600;
	text-align: left;
	color: #000000;
	line-height: 44rpx;
}
.memberlist {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	padding-bottom: 40rpx;
	height: 448rpx;
	li {
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 212rpx;
		margin-top:20rpx;
		.headimg {
			height: 112rpx;
			width: 112rpx;
			border-radius: 50%;
			background-color: #e6e6e6;
			display: flex;
			justify-content: center;
			align-items: center;
			position: relative;
			.remove{
				width: 40rpx;
				height:40rpx;
				position: absolute;
				top:0;
				right:0;
			}
			img {
				width: 100%;
				height: 100%;
			}
			.iconfont {
				font-size: 50rpx;
				color: #9d9d9d;
			}
		}
		.name {
			margin-top: 20rpx;
			text-align: center;
		}
		.tag {
			height: 36rpx;
			opacity: 1;
			border: 2rpx solid #a78af4;
			border-radius: 26rpx;
			opacity: 1;
			font-size: 20rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: center;
			color: rgba(167, 138, 244, 1);
			line-height: 36rpx;
			margin-top: 8rpx;
			padding: 0 24rpx;
		}
	}
}
</style>
