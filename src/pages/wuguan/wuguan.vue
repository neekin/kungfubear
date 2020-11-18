<template>
  <layout class="wuguan">
    <tab mode="list" />
    <navigator url="/pages/wuguan/wuguaninfo"><card /></navigator>
	<phoney-tab/>
  </layout>
</template>

<script>
import tab from "./components/tab.vue";
import card from "./components/card.vue";
export default {
  components: {
    tab,
    card,
  },
  onShow() {
    const page = this.$mp.page;
    if (typeof page.getTabBar === "function" && page.getTabBar()) {
      page.getTabBar().setData({
        selected: 1, //数字是当前页面在tabbar的索引,如我的查询页索引是2，因此这边为2，同理首页就为0，审批页面为1
      });
    }
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.wuguan {
  background-color: #f7f7f7;
}
</style>
