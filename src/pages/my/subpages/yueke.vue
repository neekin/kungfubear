<template>
	<layout>
		<tabs v-model="selected" :list="children" @input='changeChild'/>
		<filter-btns :type='type' @update='updateType'/>
		<yuekeOrder :list='list' @setItem="val=>item=val" />
		<actionsheet title='确定取消预约?' :show="asShow" @success="save_success" @close='item=null'>
			<div class="stitle">取消原因</div>
				<wxx-checkbox v-for='(ly,index) in liyoulist' :key='index' :checked="ly===liyou" :value="ly" @change="(val)=>liyou=val"></wxx-checkbox>
			<textarea v-if='liyou==="以上都不是"' v-model='infoliyou' placeholder="恳请填写具体原因" />
		</actionsheet>
	</layout>
</template>

<script>
import filterBtns from '../components/filterbtns';
import yuekeOrder from '../components/yuekeorder';
import wxxCheckbox from '@/components/wxxcheckbox.vue';
export default {
	onShow(){
		this.init()
	},
	methods:{
	  save_success(){
		  this.$api.my.cancel(this.item.make_id).then(res=>{
			  if(res.status===1){
				  this.item = null
				  this.getList()
			  }
		  })
	  },
	  changeChild(val){
		  this.child = this.clist.find((item)=>item.children_name===val)
		  this.getList()
	  },
	  updateType(val){
		  this.type = val
		  this.getList()
	  },
	  async	init(){
			await this.getChildren()
			await this.getList()
		},
		async getChildren(){
		    const { data } =   await this.$api.my.childrenList()
			this.children = data.map(item=>item.children_name)
			this.clist = data
			this.selected = data[0].children_name
			this.child = data[0]
		},
	  async	getList(){
		   const { data } =  await	this.$api.my.make_list(this.child.children_id,this.type)
		   this.list = data
		}
	},
	components: {
		filterBtns,
		yuekeOrder,
		wxxCheckbox
	},
	computed:{
		asShow(){
			return this.item  !=null
		}
	},
	data() {
		return {
			selected: '' ,
			children: [],
			clist:[],
			child:null,
			list:null,
			item:null,
			liyou:'病假',
			liyoulist:['病假','事假','临时学校活动冲突','以上都不是'],
			infoliyou:"",
			type:0
		};
	}
};
</script>

<style lang="scss" scoped>
	.stitle{
		font-size: 28rpx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		color: rgba(0,0,0,0.65);
	}
	textarea{
		width: 678rpx;
		height: 176rpx;
		background:rgba(0,0,0,0.02) ;
		border-radius: 8rpx;
		padding: 24rpx 24rpx 0;
		box-sizing: border-box;
		color:#000;

	}
</style>
