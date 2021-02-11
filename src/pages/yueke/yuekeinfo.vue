<template>
	<layout class="lay">
		<wuguan-header />
		<master-detail />
		<selectDate />
		<typelist  v-model='crousType' :plan_type="crousType" @update="(val)=>{change(val)}"/>
		<template v-if="list && list.length > 0">
			<scroll-view scroll-y="true" class="kecheng"><course v-for="item in list" :key="item.plan_course_id" :item="item" @setItem="setItem" /></scroll-view>
		</template>
		<template v-else>
			<box>暂无数据</box>
		</template>

		<actionsheet title="确定预约大课吗？" :show="acShow" @success="save_success" @close='item=null' v-if='item' cancelButtonText='再想想' comfirmButtonText='预约'>
			<div class="ac-title">选择孩子:</div>
				 <ul class="children">
				 	<li class="child" v-for="item in children" :key="item.children_id" :class='{checked:item.children_id===child.children_id}' @click='checkedThis(item)'>
				 		<div class="radio"><span class="iconfont iconduigou"></span></div>
				 		<div class="text">{{ item.children_name }}</div>
				 	</li>
				 </ul>
			 <div class='info'>
				 <div class="title">{{item.branch_course_title}}</div>
				 <div class="age">
					 <span>年龄范围</span>
					 <span>{{item.min_age}}-{{item.max_age}}</span>
				 </div>
				 <div class="cs">
					 <span>上课时间</span>
					 <span>{{getDate}}  {{item.course_start_time | times }}-{{item.course_end_time | times }}</span>
				 </div>
			 </div>
		</actionsheet>
	</layout>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import selectDate from './components/date.vue';
import typelist from './components/typelist.vue';
import course from './components/course.vue';
export default {
	computed: {
		...mapGetters('Appointment', ['getDate']),
		acShow(){
		   return	this.item !=null
		}
	},
	components: {
		selectDate,
		typelist,
		course
	},
	onLoad(params) {
		this.uid = params.uid;
		this.init();
	},
	watch: {
		getDate() {
			this.init();
		},
		crousType(){
			this.init();
		}
	},
	methods: {
		...mapActions('wuguan', ['setWuGuan']),
		init() {
			this.info();
			this.getList();
		},
		setItem(item) {
			this.item = item
		},
		checkedThis(item){
			this.child = item
		},
		info() {
			this.$api.branch.info(this.uid).then(res => {
				// console.log('详情',res)
				this.setWuGuan(res.data);
			});
		},
		getList() {
			if(this.crousType===1){
				this.$api.branch.getcourselist(this.uid, this.getDate,0).then(res => {
					this.list = res.data;
				});
			}
			if(this.crousType===3){
				this.$api.branch.getcourselist(this.uid, this.getDate,1).then(res => {
					this.list = res.data;
				});
			}
			if(this.crousType===2){
				this.$api.branch.makestafflist(this.uid,this.getDate).then(res=>{
					 this.list = res.data
				})
			}

			this.$api.my.childrenList().then(res => {
				this.children = res.data;
				if(this.children.length>0){
					this.child = this.children[0]
				}
			});
		},
		save_success() {
			let params = {
				make_obj_id:this.item.plan_course_id,
				course_type:this.plan_type,
				plan_type:this.plan_type,
				children_id:this.child.children_id,
				make_date:this.getDate,
				make_time: this.item.course_start_time,
				branch_course_id:this.item.branch_course_id
			}
		
			this.$api.course.make_course(params).then(res=>{
				if(res.status===1){
					this.item =null
					uni.redirectTo({
						url:'/pages/my/subpages/yueke'
					})
				}
			})
		},
		change(val){
			this.crousType = val
		}
	},
	data() {
		return {
			uid: '',
			type: 0,
			list: null,
			children: [],
			child:{},
			item:null,
			plan_type:1,
			crousType:1
		};
	}
};
</script>

<style scoped lang="scss">
.lay {
	background-color: #f7f7f7;
	.kecheng {
		flex: 1;
		overflow: hidden;
		height: 630rpx;
	}
	.children{
		display: flex;
		justify-content: space-between;
		margin-bottom: 20rpx;
	}
	.child {
		display: flex;
		opacity: 1;
		font-size: 32rpx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		text-align: left;
		color: #000000;
		.radio {
			width: 38upx;
			height: 38upx;
			border-radius: 50%;
			border: 2upx solid #d8d8d8;
			.iconfont {
				opacity: 0;
			}
		}
		&.checked {
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
	.ac-title{
		margin-top: 20rpx;
		margin-bottom: 20rpx;
	}
	.info{
		border-top: 1px solid rgba(0,0,0,0.1);
		.title{
			font-size: 36rpx;
			font-family: PingFangSC, PingFangSC-Semibold;
			font-weight: 600;
			text-align: left;
			color: #000000;
			line-height: 50rpx;
			margin-top: 28rpx;
		}
		.age,.cs{
			display: flex;
			justify-content: space-between;
			margin-top: 16rpx;
			font-size: 28rpx;
			font-family: PingFangSC, PingFangSC-Regular;
			font-weight: 400;
			text-align: left;
			color: #000000;
			line-height: 40rpx;
		}
		
	}
}
</style>
