<script>
export default {
	onLaunch: function() {
		console.log('App Launch');
		uni.hideTabBar();
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style lang="scss">
/*每个页面公共css */
@import './commom/style/icons.css';
.bigtitle {
	font-size: 40upx;
	font-family: PingFangSC, PingFangSC-Semibold;
	font-weight: 600;
	color: #000000;
}
</style>
