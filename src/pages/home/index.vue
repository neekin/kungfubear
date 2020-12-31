<template>
	<layout>
		<!-- <button open-type="getUserInfo" @getuserinfo="bindgetuserinfo">登录</button> -->
		<Carousel v-model="homeData.banner_list" />
		<panel v-model="homeData" />
		<menus v-model="homeData.new_notice" />

		<group />
		<zhuanti />
		<banner />
		<videos />
		<phoney-tab />
	</layout>
</template>

<script>
import Carousel from './components/carousel';
import panel from './components/panel';
import menus from './components/menus';
import group from './components/group';
import zhuanti from './components/zhuanti';
import banner from './components/banner';
import videos from './components/videos';


import { setPage } from '@/utils/page';

import { mapActions, mapGetters, mapState } from 'vuex';
export default {
	components: {
		Carousel,
		panel,
		menus,
		group,
		zhuanti,
		banner,
		videos
	},
	data() {
		return {
			checked: false,
			homeData: {}
		};
	},
	onShow() {
		const page = this.$mp.page;
		if (typeof page.getTabBar === 'function' && page.getTabBar()) {
			page.getTabBar().setData({
				selected: 0
			});
		}
		this.init();
	},
	methods: {
		async init() {
			this.homeData = await this.$api.home.Index();
			
		}
	}
};
</script>

<style lang="scss" scoped></style>
