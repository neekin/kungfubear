<template>
	<div>
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500">
			<swiper-item v-for="banner in value" :key='banner.banner_index'><img :src="banner.banner_site" alt="" /></swiper-item>
		</swiper>
		<div class="bgmask" v-if='value && value.length>0'></div>
	</div>
</template>

<script>
export default {
	props:{
		value:{
			default:()=>[]
		}
	}
};
</script>

<style scoped lang='scss'>
.swiper {
	height: 320upx;
	swiper-item {
		img {
			width: 100%;
		}
	}
}
.bgmask {
	width: 100%;
	// background-color: #ff8300;
	background: linear-gradient(#ff8300, #fff);
	height: 50px;
	position: absolute;
	top: 300upx;
	transform: translateZ(0);
	z-index: 0;
}
</style>
