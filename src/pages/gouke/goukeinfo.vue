<template>
	<layout class="lay">
		<wuguan-header />
		<info-tab
			v-model="selectType"
			:value="selectType"
			@input="
				value => {
					selectType = value;
					init();
				}
			"
			class="v-info-tab"
		/>
		<box>
		     <template v-if='list && list.length>0'>
		     	<div class="course" v-for='item in list' :key='item.uid'>
		     		<div class="row">
		     			<div class="left">
		     				<div class="title">{{item.branch_course_name_cn}}</div>
		     				<div class="info">课时:{{item.course_duration}} 课程时间:30分钟/课时</div>
		     			</div>
		     			<div class="right">
		     				<div class="price">
		     					<span>￥</span>
		     					{{item.branch_course_price}}
		     				</div>
		     				<div class="buybtn" @click="showBuyInfo(item)">购买</div>
		     			</div>
		     		</div>
		     		<div class="hr"></div>
		     		<div class="expire">有效期：2019-10-15至2019-12-30</div>
		     	</div>
		     </template>
			 <template v-else>
			 	<div>暂时没有对应课程</div>
			 </template>
		
		<!-- 	<div class="course">
				<div class="row">
					<div class="left">
						<div class="title">体适一级体能训练课</div>
						<div class="info">课时:10 课程时间:30分钟/课时</div>
					</div>
					<div class="right">
						<div class="price">
							<span>￥</span>
							29.00
						</div>
						<div class="buybtn">购买</div>
					</div>
				</div>
				<div class="hr"></div>
				<div class="expire">有效期：2019-10-15至2019-12-30</div>
			</div>
			<div class="course">
				<div class="row">
					<div class="left">
						<div class="title">体适一级体能训练课</div>
						<div class="info">课时:10 课程时间:30分钟/课时</div>
					</div>
					<div class="right">
						<div class="price">
							<span>￥</span>
							29.00
						</div>
						<div class="buybtn">购买</div>
					</div>
				</div>
				<div class="hr"></div>
				<div class="expire">有效期：2019-10-15至2019-12-30</div>
			</div>
			<div class="course">
				<div class="row">
					<div class="left">
						<div class="title">体适一级体能训练课</div>
						<div class="info">课时:10 课程时间:30分钟/课时</div>
					</div>
					<div class="right">
						<div class="price">
							<span>￥</span>
							29.00
						</div>
						<div class="buybtn">购买</div>
					</div>
				</div>
				<div class="hr"></div>
				<div class="expire">有效期：2019-10-15至2019-12-30</div>
			</div> -->
		</box>
		<buy :goodsInfo="goodsInfo" @cleanGoods="cleanGoods" @success='success' />
	</layout>
</template>

<script>
import infoTab from './components/infoTab';
import buy from './components/buy';
import { mapActions} from 'vuex'
// ...mapActions("search", ["setHistory", "setDestCity", "setCriteria"]),
export default {
	onLoad(params) {
		this.uid = params.uid;
		this.init();
	},
	methods: {
		...mapActions("wuguan", ["setWuGuan"]),
		showBuyInfo(goods) {
			console.log(goods)
			this.goodsInfo = goods;
			
			// this.$api.order.generateorder('2371FE13633E1C2ECC94CF6543B99F8F').then(res=>console.log('下单',res))
		},
		success(){
			this.$api.order.generateorder(this.goodsInfo.uid).then(res=>{
			 if(res.status===1){
				 this.goodsInfo = null
				 uni.showToast({
				 	title:"成功,跳转支付",
					icon:"loading",
					success:()=>{
						this.$api.pay.pay(res.data.order_id).then(payres => {
							uni.requestPayment({
							    provider: 'wxpay',
							    ...payres.data,
							    success: function (res) {
							          uni.redirectTo({
							          	url:"/my/subpages/myorder"
							          })
							    },
							    fail: function (err) {
							        uni.showToast({
							        	title:"支付失败",
										success(){
											uni.redirectTo({
												url:"/my/subpages/myorder"
											})
										}
							        })
							    }
							});
						})
					}
				 })
			 }
			})
		},
		cleanGoods() {
			this.goodsInfo = null;
		},
		init() {
            this.getlist(this.uid,this.selectType)
			this.info()
		},
		info(){
			this.$api.branch.info(this.uid).then(res=>{
				// console.log('详情',res)
				this.setWuGuan(res.data)
			})
		},
		getlist(uid,type){
			this.$api.course.list(uid, type).then(res => {
				// this.$store.dispatch('setWuGuan',res.data)
				// this.setWuGuan(res.data)
				if(res.data.course_list && res.data.course_list.length> 0){
					this.list = res.data.course_list 
				}else{
					this.list = null
				}
			
			});
		}
	},
	data() {
		return {
			actIndex: 0,
			goodsInfo: null,
			uid:'',
			selectType:'39B18EEE5AA7AB10E9F59375C6154075',
			list:null,
			branch_course_id:''
		};
	},
	components: {
		infoTab,
		buy
	}
};
</script>

<style lang="scss" scoped>
.lay {
	background-color: #f7f7f7;
}
.v-info-tab {
	margin-top: -80upx;
}

.course {
	width: 686upx;
	height: 274upx;
	background: #ffffff;
	border-radius: 16upx;
	padding: 32upx 32upx 24upx 32upx;
	box-sizing: border-box;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	margin-bottom: 24upx;
	.row {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		height: 191upx;
	}
	.title {
		font-size: 36upx;
		font-family: PingFangSC, PingFangSC-Semibold;
		font-weight: 600;
		text-align: left;
		color: #000000;
	}
	.info {
		opacity: 0.7;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		text-align: left;
		color: #000000;
		margin-top: 20upx;
	}
	.hr {
		width: 622upx;
		height: 2upx;
		background-color: rgba(0, 0, 0, 0.1);
	}
	.expire {
		opacity: 0.6;
		font-size: 24upx;
		font-family: PingFangSC, PingFangSC-Regular;
		font-weight: 400;
		color: #000000;
		height: 80upx;
		width: 100%;
		padding-top: 30upx;
		box-sizing: border-box;
	}
	.price {
		font-size: 46upx;
		font-family: DINAlternate, DINAlternate-Bold;
		font-weight: 700;
		color: #ff8300;
		span {
			font-size: 26upx;
			font-weight: 700;
		}
	}
	.buybtn {
		width: 144upx;
		height: 52upx;
		background: #ff8300;
		border-radius: 32upx;
		box-shadow: 0upx 4upx 8upx 0upx #ff9022;
		font-size: 28upx;
		font-family: PingFangSC, PingFangSC-Medium;
		font-weight: 500;
		color: #fefffe;
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
</style>
