<template>
	<layout class='lay'>
			<map class='map'></map>
			<box class='box1'>
                <wuguan />
				<wuguan />
				<wuguan />
				<wuguan />
				<wuguan />
			</box>
	</layout>
</template>

<script>
	import wuguan from './components/wuguan'
	export default {
          components:{
			  wuguan
		  }
	}
</script>

<style lang="scss" scoped>
.lay{
	background-color: #ccc;
}
.map{
	height:600upx;
	width: 100%;
}
.box1{
	padding-top: 0;
}

</style>
