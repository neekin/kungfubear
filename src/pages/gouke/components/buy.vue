<template>
	<div class='buy' :class='{show:buy,hide:!buy}'>
        <comfiremInfo :goodsInfo='goodsInfo' @close='close' :showComfiremInfo='showComfiremInfo' @showCouponsEvent='showCouponsEvent' @pay='pay'/>
		<coupons :showCoupons='showCoupons' @back='showCouponsEvent'/>
	</div>
</template>

<script>
import comfiremInfo from './comfirmInfo.vue'
import coupons from './coupons.vue'
export default {
	props:{
		goodsInfo:{
			default:null
		}
	},
	computed:{
		buy(){
			this.showComfiremInfo = this.goodsInfo!==null
			return this.goodsInfo!==null
		}
	},
	methods:{
		showCouponsEvent(status){
			this.showCoupons = status
			this.showComfiremInfo = !status
		},
		close(status){
			this.showCoupons = status
			this.showComfiremInfo = status
			this.$emit('cleanGoods',null)
		},
		pay(){
			this.$emit('success')
		}
	},
	data(){
		return{
			showComfiremInfo:true,
			showCoupons:false
		}
	},
	 components:{
		 comfiremInfo,
		 coupons
	 }
}
</script>

<style lang="scss" scoped>
.buy{
	&.show{
		position: fixed;
		width: 100vw;
		height:100vh;
		top:0;
		left:0;
		bottom:0;
		right:0;
		background-color: #fff;
		background: rgba(0,0,0,0.4);
		z-index: 10;
	}
	&.hide{
		display: none;
	}

}
</style>
