<template>
	<layout class='wuguan'>
		<tab mode='list'/>
		<navigator url="/pages/wuguan/wuguaninfo">
		  <card />
		</navigator>
	</layout>
</template>

<script>
	import tab from './components/tab.vue'
	import card from './components/card.vue'
	export default {
		components:{
			tab,
			card
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
.wuguan{
	background-color: #f7f7f7;
}
</style>
