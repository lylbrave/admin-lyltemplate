<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tab></common-tab>
      <el-main> <router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script type="text/ecmascript-6">
import CommonHeader from "../components/CommonHeader";
import CommonAside from "../components/CommonAside";
import CommonTab from "../components/CommonTab";
export default {
  data() {
    return {};
  },
  components: {
    CommonHeader,
    CommonAside,
    CommonTab,
  },
};
</script>

<style scoped lang="scss">
.el-header {
  background-color: #333;
}
.el-main {
  height: 100%;
  width:100%;
  overflow-y:auto ;
  background-color: #f0f2f5;
}
</style>
