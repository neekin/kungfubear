<template>
	<layout>
		<tabs v-model="selected" :list="children" />
	    <order></order>
	</layout>
</template>

<script>
import order from '../components/fankuiorder';
export default {
	components:{
		order
	},
	data() {
		return {
			selected: '二狗子',
			children: ['二狗子', '三毛']
		};
	}
};
</script>

<style lang="scss"></style>
