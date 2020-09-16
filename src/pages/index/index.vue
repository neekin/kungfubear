<template>
	<layout>
		<swiper class="swiper" indicator-dots="true" autoplay="true" interval="5000" duration="1500"></swiper>
		<div class="bgmask"></div>
		<panel />
		<menus />
		<group />
		<zhuanti />
		<banner />
		<videos />
	</layout>
</template>

<script>
import panel from './components/panel';
import menus from './components/menus';
import group from './components/group';
import zhuanti from './components/zhuanti';
import banner from './components/banner';
import videos from './components/videos';

export default {
	components: {
		panel,
		menus,
		group,
		zhuanti,
		banner,
		videos
	},
	data() {
		return {};
	},
	onLoad() {

	},
	methods: {}
};
</script>

<style lang="scss" scoped>
.swiper {
	height: 320upx;
	background-color: #000;
}
.bgmask {
	width: 100%;
	// background-color: #ff8300;
	background:linear-gradient(#FF8300,#fff);
	height: 50px;
	position: absolute;
	top: 300upx;
	transform: translateZ(0);
	z-index: 0;
}
</style>
